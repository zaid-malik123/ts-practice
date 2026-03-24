import mongoose, { Document } from "mongoose";
interface ITodo extends Document {
    user: mongoose.Types.ObjectId;
    title: string;
    description: string;
    isCompleted: boolean;
}
export declare const Todo: mongoose.Model<ITodo, {}, {}, {}, mongoose.Document<unknown, {}, ITodo, {}, mongoose.DefaultSchemaOptions> & ITodo & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ITodo>;
export {};
//# sourceMappingURL=todo.model.d.ts.map