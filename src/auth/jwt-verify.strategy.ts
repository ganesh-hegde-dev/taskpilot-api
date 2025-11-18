import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWTConfig } from "src/shared/config/jwt.config";

@Injectable()
export class JWTVerifyStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(JWTConfig.KEY) private jwtConfig : ConfigType<typeof JWTConfig>
    ){
        if(!jwtConfig.jwtSecretKey){
            throw new Error("JWT Secret key failed to load")
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConfig.jwtSecretKey,
        })
    }
    async validate(jwtDecode: any): Promise<any> {
        // Add inteface for jwtDecoded object
        return jwtDecode
      }
}