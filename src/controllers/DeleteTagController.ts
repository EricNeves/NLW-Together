import { Request, Response } from 'express'
import { DeleteTagService } from '../services/DeleteTagService'

class DeleteTagController {
    async handle(request: Request, response: Response){
        try{
            const {tag_id} = request.body
            const deleteTagService = new DeleteTagService()

            await deleteTagService.execute(tag_id)

            return response.status(200).json({msg: 'Successfully'})
        
        }catch(err){
            response.status(400).json({error: err.message})
        }
    }
}

export { DeleteTagController }