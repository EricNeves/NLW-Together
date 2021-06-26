import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

class ListTagByIdService {
    async execute(user_id: string){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tag = await tagsRepositories.findOne({
            id: user_id
        })

        if(!tag)
            throw new Error("Error - Check Token or Tag ID")
        
        return user
    }
}

export { ListTagByIdService }