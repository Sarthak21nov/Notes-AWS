import express from "express"
import { login, register } from "../Controllers/AuthController.js"

const router = express.Router()

// APIS
router.post('/login', login)
router.post('/register', register)

export default router;