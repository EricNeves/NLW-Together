import { Request, Response } from 'express'
import { UpdateTagService } from '../services/UpdateTagService'

class UpdateTagController {
    async handle(request: Request, response: Response){
        try{
            const { tag_id, tag_name } = request.body

            const updateTagController = new UpdateTagService()

            await updateTagController.execute({tag_id, tag_name})

            return response.status(200).json({msg: "Successfully"})
        }catch(err){
            response.status(400).json({error: err.message})
        }
    }
}

export { UpdateTagController }