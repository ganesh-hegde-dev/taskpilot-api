import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDTO } from '../dto/user.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService){

    }

    @Post()
    Login(@Body() user: UserLoginDTO ) {
        return this.loginService.login(user)
    }
}
