import { Schema, Document, model } from "mongoose";
const userSchema = new Schema({
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
}, { timestamps: true });
const User = model("User", userSchema);
export default User;
//# sourceMappingURL=user.model.js.map