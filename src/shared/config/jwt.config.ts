import { registerAs } from "@nestjs/config";
import { appName } from "../utils/app.constant";

export const JWTConfig = registerAs(`${appName}-jwt`, ()=>{
    // .pem file loading should be implmented
    return {
        jwtSecretKey : process.env.JWT_SECRET_KEY
    }
});