import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

interface IComplimentRequest {
    user_id: string
    id_compliment: string
    message: string
}

class UpdateSendComplimentsService {
    async execute( {user_id, id_compliment, message} : IComplimentRequest ){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const complimentExists = await complimentsRepositories.findOne({
            where: {
                user_sender: user_id,
                id: id_compliment
            }
        })
        
        if ( !complimentExists )
            throw new Error("Compliment does not exists")
        
        const compliment = await complimentsRepositories.update(id_compliment, {
            message: message
        })

        return compliment
    }
}

export { UpdateSendComplimentsService }