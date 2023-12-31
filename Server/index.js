import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/usres.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/posts', postRoutes)
app.use('/usres', userRoutes)

// const CONNECTION_URL = 'mongodb+srv://Web1:8mI4ib8DSDda72KM@cluster0.swaki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))
mongoose.set('useFindAndModify', false)
