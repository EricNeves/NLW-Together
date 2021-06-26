import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'

class ListUserByIdService {
    async execute(user_id: string){
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({
            id: user_id
        })

        if(!user)
            throw new Error("Error - Check Token or User ID")
        
        return classToPlain(user)
    }
}

export { ListUserByIdService }