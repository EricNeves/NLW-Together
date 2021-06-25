import { Request, Response } from 'express'
import { DeleteSendComplimentsService } from '../services/DeleteSendComplimentsService'

class DeleteSendComplimentController {
    async handle(request: Request, response: Response){
        try{
            const { id_compliment } = request.body
            const deleteSendComplimentsService = new DeleteSendComplimentsService()

            await deleteSendComplimentsService.execute(id_compliment)

            return response.status(200).json({msg: 'Successfully'})
        }catch(err){
            response.status(400).json({error: err.message})
        }
    }
}

export { DeleteSendComplimentController }