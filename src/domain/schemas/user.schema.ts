import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IUser } from "src/shared/inteface/user.interface";

@Schema()
export class User implements Omit<IUser, '_id'> {
    @Prop({ required: true })
    userName: string;

    @Prop({ required: true })
    emailId: string;

    @Prop({ required: true })
    password: string;

}

//In Mongoose, a "hydrated" document refers to a plain JavaScript object that has been converted into a fully-featured Mongoose Document instance, giving it access to schema methods, virtuals, and other Mongoose-specific features like validation, change tracking, and helper functions.
export type UserSchemaDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);