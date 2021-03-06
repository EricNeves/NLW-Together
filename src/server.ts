import express, { Request, Response, NextFunction } from 'express'
import 'reflect-metadata'
import 'express-async-errors'
import { router } from './routes'
import cors from 'cors'
import './database'

const app = express()

const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => 
    console.log(`Server running on ${PORT}`)
)