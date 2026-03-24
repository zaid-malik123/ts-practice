import {Schema, Document, model} from "mongoose"

interface IUser extends Document {
    userName: string,
    email: string,
    password: string,
    role: "user" | "admin"
    createdAt?: Date,
    updatedAt?: Date
}

const userSchema: Schema<IUser> = new Schema({

    userName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }

}, 
{timestamps: true}
)

const User = model<IUser>("User", userSchema)
export default User;