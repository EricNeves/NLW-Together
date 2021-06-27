import { Request, Response } from "express"
import { ListTagByIdService } from '../services/ListTagByIdService'

class ListTagByIdController {
    async handle(request: Request, response: Response){
        const listTagByIdService = new ListTagByIdService()
        const { id } = request.params
        const tag = await listTagByIdService.execute(id)

        return response.json(tag)
    }
}

export { ListTagByIdController }