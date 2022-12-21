import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LogSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 80
        },
        description: {
            type: String,
            required: true,
            min: 5
        },
        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        tag1: {
            type: String,
            required: true
        },
        tag2: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
export default mongoose.model("logModel", LogSchema) 