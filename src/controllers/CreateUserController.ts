import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    async handle(request: Request, response: Response){
        try{
            const { name, email, admin, password } = request.body
            const createUserService = new CreateUserService()

            const user = await createUserService.execute({
                name, email, admin, password
            })

            return response.json(user)
        }catch(err){
            response.status(400).json({error: err.message})
        }
    }
}

export { CreateUserController }