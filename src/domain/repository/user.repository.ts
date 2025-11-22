import { InjectModel } from "@nestjs/mongoose";
import { User } from "../schemas/user.schema";
import { Model } from "mongoose";
import { IUser } from "src/shared/inteface/user.interface";

export class UserRepository {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(user: Omit<IUser, '_id'>) {
        const newUser = new this.userModel(user)
        return await newUser.save()
    }

    async getUser(emailId: string) {
        return await this.userModel.findOne({ emailId })
    }
}