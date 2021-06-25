import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'


class DeleteSendComplimentsService {
    async execute(id_compliment: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const complimentExists = await complimentsRepositories.findOne(id_compliment)

        if ( !complimentExists )
            throw new Error("Compliment does not exists")

        const compliment = await complimentsRepositories.delete(id_compliment)

        return compliment
    }
}   

export { DeleteSendComplimentsService }