
import mongoose from "mongoose";

import config from "./config.js";

const connectionDB = async()=>{
    try {
        const conn =await mongoose.connect(config.mong_url);

        console.log(`Connection success ${conn.connection.host}`.cyan)
    } catch (error) {
        console.log("Error connection in mongoose",error.message)
        process.exit(1)
        
    }
}

export default connectionDB