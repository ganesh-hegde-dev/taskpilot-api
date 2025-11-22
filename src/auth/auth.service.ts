import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { JWTConfig } from "src/shared/config/jwt.config";
import { IUser } from "src/shared/inteface/user.interface";

@Injectable()
export class AuthService {

    constructor(@Inject(JWTConfig.KEY) private config: ConfigType<typeof JWTConfig>, private jwtService: JwtService) { }
    //Implement Auth Service
    async generateJWT(user: Omit<IUser, 'password'>) {

        return await this.jwtService.sign(user, { secret: this.config.jwtSecretKey, expiresIn: '24h' })
    }
}