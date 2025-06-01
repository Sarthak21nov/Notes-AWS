import mongoose from "mongoose"

const NotesModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }, 
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Notes = mongoose.model('Notes', NotesModel)
export default Notes