import express, { Request, Response, NextFunction } from 'express'
import 'reflect-metadata'
import 'express-async-errors'
import { router } from './routes'
import { config } from './config/settings'
import cors from 'cors'

import './database'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if ( err instanceof Error ){
        response.status(400).json({
            error: err.message 
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Error Server"
    })
})

app.listen(config.PORT, () => 
    console.log(`Server running on ${config.HOST}:${config.PORT}`)
)