import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name is required"]
    },
    email : {
        type : String,
        required : [true , "Email is required"],
        unique : true
    },
    password : {
        type : String , 
        require : [true , "Password is required"]
    },
    image : {
        type : String , 

    },
    role : {
        type : [String],
        default : 'USER_ROLE',
        enum : ['ADMIN_ROLE' , 'USER_ROLE']
    }
})