import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/userController.js'
import { verifyUser } from './../utils/verifyUser.js';

const userRoute = express.Router()

userRoute.post('/',getUsers)
userRoute.get('/',getUsers)
userRoute.get('/:id',getUser)
userRoute.put('/:id',verifyUser,updateUser)
userRoute.delete('/:id',verifyUser,deleteUser)

export default userRoute