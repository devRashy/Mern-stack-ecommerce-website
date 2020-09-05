const express = require("express")
const env = require("dotenv")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express();

//routes
const userRoutes = require('./routes/user');
const { createIndexes } = require("./models/User");

//  environment variable
env.config()


mongoose.connect('mongodb://localhost:27017/ecommerce',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("database connected")
})

app.use(bodyParser)
app.use('/api', userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})