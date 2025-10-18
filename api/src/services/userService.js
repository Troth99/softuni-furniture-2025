import User from "../models/User.js"

export default {
    async register(email, password) {

        return User.create({email, password})

    }
}