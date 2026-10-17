import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        requried:true,
        unique: true,
    },
    phone:{
        type: String,
        requried: true,
        unique: true

        },
        passwordHash:{
            type:String,
            requried:true
        }
    
})
const userModel = mongoose.model("users", userSchema)

export default userModel