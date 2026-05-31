import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserLoginDTO } from '../dto/user.dto';
import { UserRepository } from '../../../domain/repository/user-repository';
import { comparePassword } from '../../../shared/utils/bcrypt';
import { AuthService } from '../../../auth/auth.service';

@Injectable()
export class LoginService {

    constructor(private userRepo : UserRepository, private auth : AuthService){}

    async login(user: UserLoginDTO){
        try {
            const userInfo = await this.userRepo.getUser(user.emailId)
            if(!userInfo){
                throw new NotFoundException('User Not Exists')
            }
            
            const isCorrectPassword = await comparePassword(user.password, userInfo.password)
            if (!isCorrectPassword) {
                throw new UnauthorizedException('Invalid Password');
              }
            const jwt =  await this.auth.generateJWT({userName : userInfo.userName, emailId : userInfo.emailId, _id : userInfo._id})

            return {
                jwt 
            }

        }catch(error) {
            throw error
        }
    }
}
