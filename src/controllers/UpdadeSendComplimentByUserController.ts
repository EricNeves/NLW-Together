import { Request, Response } from 'express'
import { UpdateSendComplimentsService } from '../services/UpdateSendComplimentsService'

class UpdateSendComplimentByUserController {
    async handle(request: Request, response: Response){
        try{
            const { id_compliment, message } = request.body
            const { user_id } = request

            const updateSendComplimentsService = new UpdateSendComplimentsService()

            await updateSendComplimentsService.execute(user_id, id_compliment, message)

            return response.status(200).json({msg: "Successfully"})
        }catch(err){
            response.status(400).json({error: err.message})
        }
    }
}

export { UpdateSendComplimentByUserController }