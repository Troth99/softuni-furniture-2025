import express from 'express'
import cors from 'cors'
import routes from './routes.js'
import mongoose from 'mongoose'
import { authMiddleware } from './middlewares/authMiddleware.js'


const app = express()


try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'furniture-store-2025'
    })

    console.log('Successfully connected to DB!')

} catch (error) {
    console.error('Cannot connect to DB!')
    console.error(error.message)
}

app.use(cors())



// Add json parser
app.use(express.json())

// Add auth middleware
app.use(authMiddleware)

// Add routes
app.use(routes)

app.listen(3030, () => console.log('Server is listening on http://localhost:3030/...') )