import * as dotenv from "dotenv"
dotenv.config()

const config = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    SECRET: process.env.SECRET
}

export { config }