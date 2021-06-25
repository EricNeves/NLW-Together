import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs'
import { classToPlain } from 'class-transformer'

interface IUserRequest {
    name: string 
    email: string 
    admin?: boolean
    password: string
}

class CreateUserService {
    async execute({ name, email, admin = false, password } : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories)

        if(!email)
            throw new Error('Email incorrect')
        
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if (userAlreadyExists)
            throw new Error('User already exists')

        const passwordHash = await hash(password, 8)
        
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepository.save(user)

        return classToPlain(user)
    }
}

export { CreateUserService }