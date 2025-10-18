import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {

    const { email, password } = req.body;

    const result = await userService.register(email, password)

    res.end()
})


userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.login(email, password)

        res.status(201).json( result )
    } catch (error) {

        res.status(401).json({ message: error.message })

    }
})

export default userController