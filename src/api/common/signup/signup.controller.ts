import { Body, Controller, Post } from '@nestjs/common';
import { UserSignUpDTO } from '../dto/user.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
    constructor(private signup: SignupService){

    }
    @Post()
    Signup(@Body() user : UserSignUpDTO){
       return this.signup.signup(user)
    }
}
