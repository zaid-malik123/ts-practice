import mongoose, { Schema, model, Document } from "mongoose";

interface ITodo extends Document {
  user: mongoose.Types.ObjectId,
  title: string;
  description: string;
  isCompleted: boolean;
}

const todoSchema: Schema<ITodo> = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Todo = model<ITodo>("Todo", todoSchema);