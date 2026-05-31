import { Injectable } from '@nestjs/common';
import { UserSignUpDTO } from '../dto/user.dto';
import { UserRepository } from '../../../domain/repository/user-repository';
import { hashPassword } from 'src/shared/utils/bcrypt';

@Injectable()
export class SignupService {
    constructor(private userRepo : UserRepository){}
    async signup(user: UserSignUpDTO){
        try{
            const hashPass = await hashPassword(user.password)
            const userInfo = await this.userRepo.createUser({...user, password : hashPass});
            if(!userInfo){
                throw new Error("Something went Wrong")
            }
            return {
                message : `Welcome ${userInfo.userName}`
            }

        }catch(error){
            throw error
        }
    }
}
