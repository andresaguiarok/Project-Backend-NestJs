import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {

    @Prop({required: true})
    firtsName : String;

    @Prop({required: true})
    lastName : String;

    @Prop({required: true, unique: true})
    email : String;

}

export const userSchema = SchemaFactory.createForClass(User)