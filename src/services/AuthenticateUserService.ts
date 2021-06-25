import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from '../repositories/UsersRepositories'
import { config } from '../config/settings'

interface IAuthenticateRequest {
    email: string
    password: string
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({ email })

        if (!user)
            throw new Error('Email/Password incorrect')

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch)
            throw new Error('Email/Password incorrect')

        const token = sign({
            email: user.email,
        },
            config.SECRET,
            {
                subject: user.id,
                expiresIn: "365d"
            })
        
        return token
    }
}
export { AuthenticateUserService }