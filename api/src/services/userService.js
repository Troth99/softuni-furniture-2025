import User from "../models/User.js"
import bcrypt from 'bcrypt'

export default {
    async register(email, password) {

        return User.create({ email, password })

    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Invalid email or password');
        }
        
        //Generate token

        return

    
    }
}