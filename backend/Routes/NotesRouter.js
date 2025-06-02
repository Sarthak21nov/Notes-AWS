import express from "express"
import { protect } from "../Utils/protect.js"
import { addNotes, deleteNotes, getNotes, updateNotes, getNotesBasedOnId } from "../Controllers/NotesControllers.js"

const router = express.Router()

// APIs
router.get('/getNotes', protect, getNotes)
router.get('/getNotesBasedOnId', protect, getNotesBasedOnId)
router.post('/addNotes', protect, addNotes)
router.put('/:id', protect, updateNotes)
router.delete('/:id', protect, deleteNotes)

export default router