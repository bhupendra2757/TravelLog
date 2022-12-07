import mongoose from "mongoose";
import { stringify } from "querystring";
import validator from "validator";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter  Username "],
            unique: [true, "Username Must be unique"]
        },
        password: {
            type: String,
            required: [true, "Please enter the Password "],
            validate: [validator.isStrongPassword, "Password must be at least 8 characters long with at least 1 Uppercase character and a symbol"],
        },
        fullName: {
            type: String,
            required: [true, "Please enter your Full Name"],
        },
        email: {
            type: String,
            required: [true, "Please enter your email address"],
            validate: [validator.isEmail, "Please enetr valid Email"],
        },
    },
    {timestamps: true},
);

const User = mongoose.model("User", userSchema);
export default User;