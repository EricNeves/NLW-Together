import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'

class UpdateSendComplimentsService {
    async execute( user_id: string, id_compliment: string, message: string ){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const complimentExists = await complimentsRepositories.findOne({
            where: {
                user_sender: user_id
            }
        })
        
        if ( !complimentExists )
            throw new Error("Error - Check token or compliment ID")
        
        const compliment = await complimentsRepositories.update(id_compliment, {
            message: message
        })

        return compliment
    }
}

export { UpdateSendComplimentsService }