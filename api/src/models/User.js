import { Schem, model } from "mongoose";



const userSchema = new Schem({
    email: {
        type: String,
        required: [true, 'User email is required!']
    },
    password: {
        type: String,
        required: [true, 'User password is required!']
    }
})


const User = model('User', userSchema);

export default User