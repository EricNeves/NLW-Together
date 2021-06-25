import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

interface IUpdateRequest {
    tag_id: string
    tag_name: string
}

class UpdateTagService {
    async execute({ tag_id, tag_name } : IUpdateRequest){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tagExists = tagsRepositories.findOne(tag_id)

        if(!tagExists)
            throw new Error("Tag does not exists")

        const update_tag = await tagsRepositories.update(tag_id, {
            name: tag_name
        })

        return update_tag
    }
}

export { UpdateTagService }