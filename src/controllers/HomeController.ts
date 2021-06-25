import { Request, Response } from "express"

class HomeController {
    async handle(request: Request, response: Response){

        return response.status(200).json({
            msg: "Welcome to NLW Valoriza API",
            author: "Eric Neves 🛸",
            project: "https://github.com/EricNeves/NLW-Together"
        })
    }
}

export { HomeController }