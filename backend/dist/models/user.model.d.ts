import { Document } from "mongoose";
interface IUser extends Document {
    userName: string;
    email: string;
    password: string;
    role: "user" | "admin";
    createdAt?: Date;
    updatedAt?: Date;
}
declare const User: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export default User;
//# sourceMappingURL=user.model.d.ts.map