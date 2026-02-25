import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:email,
        required:true,
        unique:true
    },
    password:{
        type:password,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        default:"user",
    }
})
export const User = mongoose.model("User",userSchema)