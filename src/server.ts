import express from 'express';
import router from "./router.js";
import {config} from "dotenv";
import * as process from "process";
import * as mongoose from "mongoose";

config()

const PORT = process.env.PORT ?? 3000;
const MONGO_URL = process.env.MONGO_URL ?? "";

const app = express();


// Routing
app.use('/api', router)


const start = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('DB connected');

        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT} port`);
        })
    } catch (e) {
        console.log(e)
    }
}


start();