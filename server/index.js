const cors = require("cors")
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const express = require('express')
const cookieParser = require("cookie-parser")
const app = express()
const { connectMongoDb } = require('./connection')

const roomRouter = require("./Routes/blogrout")

dotenv.config()

app.use(cors())
app.use(bodyParser.json())



app.use(cookieParser())
app.use(express.json())

app.use("/blogs", roomRouter)




app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({ status: errorStatus, message: errorMessage, success: false, stack: err.stack })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("SERVER STARTED");
})


const url = process.env.CONNECTION_URL
connectMongoDb(url)