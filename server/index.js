require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')

app.use(express.json());
app.use(cors());

app.use('/', userRouter)

app.use("/api/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT, console.log('Server Is Running...'));
    } catch (err) {
        console.log(err);
    }
}

start();