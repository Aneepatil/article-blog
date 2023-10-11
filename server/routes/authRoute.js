import express from 'express'
import { signIn, signUp } from '../controllers/authController.js'

const authRoute = express.Router()

authRoute.post('/sign-up',signUp)
authRoute.post('/sign-in',signIn)

export default authRoute