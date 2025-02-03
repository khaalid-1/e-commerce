
import express from "express"
import colors from "colors"
import authRouter from "./router/auth.router.js"
import { config } from "./config/config.js"
import connectDB from "./config/db.js"

const app = express()



app.use("/api/v1/auth", authRouter);


app.listen(config.port, () => {
    connectDB()
    console.log(`server is running on port http://localhost:${config.port}`.cyan);
})