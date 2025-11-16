import { registerAs } from "@nestjs/config"
import { appName } from "../utils/app.constant"

export const DBConfig = registerAs(`${appName}-db`, ()=>{
    return {
        mongoUrl : process.env.MONGO_URL
    }
} )