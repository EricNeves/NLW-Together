import * as dotenv from "dotenv"
dotenv.config()

const config = {
    HOST: process.env.HOST,
    PORT: process.env.PORT
}

export { config }