import { Types } from "mongoose"

export interface IUser {
    _id : Types.ObjectId
    userName : string
    emailId : string
    password : string
}