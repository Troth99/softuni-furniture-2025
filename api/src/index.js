console.log('It works')

import express from 'express'
import cors from 'cors'
import routes from './routes.js'


const app = express()

app.use(cors())


// Add routes
app.use(routes)

app.listen(3030, () => console.log('Server is listening on http://localhost:3030/...') )