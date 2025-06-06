import mongoose from "mongoose"

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    userID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserModel)
export default User