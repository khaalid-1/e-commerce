import express from "express";
import colors from "colors"
import config from "./config/config.js"


const app = express()


 app.listen(config.port,()=>{
    console.log(`Server is running on port http://localhost:${config.port}`.yellow);
 })

























