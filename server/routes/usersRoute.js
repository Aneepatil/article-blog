import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.post('/',getUsers)
userRoute.get('/',getUsers)
userRoute.get('/:id',getUser)
userRoute.put('/:id',updateUser)
userRoute.delete('/:id',deleteUser)

export default userRoute