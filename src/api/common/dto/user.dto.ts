import { IsEmail, IsString } from "class-validator";
import { Schema } from "mongoose";
import { IUser } from "src/shared/inteface/user.interface";

export class UserSignUpDTO implements Omit<IUser, '_id' > {

    @IsEmail()
    userName!: string;

    @IsString()
    emailId!: string;

    @IsString()
    password!: string;

}

export class UserLoginDTO  {

    @IsEmail()
    emailId!: string;

    @IsString()
    password!: string;

}