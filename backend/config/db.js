import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(config.mongURL);
        console.log(`connection success ${conn.connection.host}`.yellow);
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB