import mongoose, { Schema, model, Document } from "mongoose";
const todoSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
export const Todo = model("Todo", todoSchema);
//# sourceMappingURL=todo.model.js.map