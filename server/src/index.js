const express = require("express")
const cors = require("cors")
const { config } = require("dotenv")
const mongoose = require("mongoose")
const path = require("path")

const app = express()
app.use(express.json())
app.use(cors())
config()

mongoose.connect(process.env.MONGODBURI, { dbName: "techsoulpng" })
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((err) => {
        console.error(err)
    })

const { PORT = 8000 } = process.env

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const categoriesRouter = require('./routes/categories')
const uploadRouter = require('./routes/upload')

app.use('/auth', authRouter)
app.use('/admin', usersRouter)
app.use('/admin', categoriesRouter)
app.use('/admin', uploadRouter)
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));