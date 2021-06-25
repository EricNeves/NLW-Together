import { Request, Response, NextFunction } from 'express'
import { config } from '../config/settings'
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization

    if(!authToken)
        return response.status(401).json({
            msg: "Unauthorized"
        })

    const [,token] = authToken.split(' ')

    try{
        const { sub } = verify(token, config.SECRET) as IPayload
        request.user_id = sub
        return next()
    }catch(err){
        return response.status(401).json({
            error: err
        })
    }
}