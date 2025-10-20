import { Schema, model } from 'mongoose'




const furnitureSchema = new Schema({
    make: {
        type: String,
        required: [true, 'Make is required!'],
        minLenght: [4, 'Make should be at least 4 chacracters long!']
    },
    model: {
        type: String,
        required: [true, 'Model is required!'],
        minLenght: [4, 'Model should be at least 4 chacracters long!']
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1950, 'Year should be at least 1950'],
        max: [2050, 'Year should be at below 2050']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLenght: [10, 'Description should be at least 10 chacaters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'Price should be positive number!']
    },
    imageUrl: {
        type: String,
        required: [true, 'ImageUrl is required!']
    },
    material: {
        type: String,
        required: false,
    }
})

const Furniture = model('Furniture', furnitureSchema)

export default Furniture