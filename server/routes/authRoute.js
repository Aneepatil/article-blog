import express from 'express'
import { signIn, signOut, signUp } from '../controllers/authController.js'

const authRoute = express.Router()

authRoute.post('/sign-up',signUp)
authRoute.post('/sign-in',signIn)
authRoute.get('/signout', signOut)

export default authRoute