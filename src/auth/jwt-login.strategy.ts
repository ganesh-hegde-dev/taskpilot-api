import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LoginStarttegy extends PassportStrategy(Strategy) {
    constructor(){
        super()
    }
    async validate(username: string, password: string): Promise<any> {
        //Validate user by checking mongoDB
      }
}