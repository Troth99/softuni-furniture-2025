import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {

    const { email, password } = req.body;

    const result = await userService.register(email, password)

    res.end()
})

export default userController