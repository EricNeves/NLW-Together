import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

class DeleteTagService {
    async execute( id_tag: string ){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tagExists = await tagsRepositories.findOne(id_tag)

        if(!tagExists)
            throw new Error("Tag does not exists")
            
        const tag = await tagsRepositories.delete(id_tag)

        return tag
    }
}

export { DeleteTagService }