import Notes from "../Models/Note.js"

export const getNotes = async (req,res)=>{
    const notes = await Notes.find({user: req.user})
    return res.status(200).json({success: true, message: "Here is your result", notes: notes})
}

export const getNotesBasedOnId = async (req,res)=>{
    const { id } = req.query; 
    try {
        const note = await Notes.findById(id);
        if (!note) return res.status(400).json({ success: false, message: "Cannot find Note" });
        return res.status(200).json({ success: true, note });
    } catch (err) {
        return res.status(500).json({ success: false, message: "An error occurred", error: err.message });
    }
}

export const addNotes = async (req,res)=>{
    const user = req.user
    const {title, content} = req.body

    try{
        const newNote = new Notes({user: user, title, content})
        await newNote.save()
        return res.status(200).json({success: true, message: "Note Saved"})
    } catch(err){
        return res.status(400).json({success: false, message: "Unable to save Notes"})
    }
}

export const updateNotes = async (req,res)=>{
    const {id} = req.params
    const {title, content} = req.body

    try{
        const note = await Notes.findOneAndUpdate(
            {_id: id, user: req.user},
            {title, content},
            {new: true}
        )
        if(!note){return res.status(404).json({status: false, message: "Note Not found"})}

        return res.status(200).json({success: true, message: "Note Updated"})
    } catch(err){
        return res.status(404).json({status: false, message: "An Error occurred"})
    }
}

export const deleteNotes = async (req,res)=>{
    const {id} = req.params

    try{
        await Notes.findOneAndDelete({_id: id })
        return res.status(200).json({success: true, message: "Note Deleted"})
    } catch(err){
        return res.status(404).json({status: false, message: "An Error occurred while deleting"})
    }
}