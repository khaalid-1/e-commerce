import express from "express";
import colors from "colors"
import config from "./config/config.js"
import authRoutes from "./routers/auth.route.js";
import connectionDB from "./config/db.js"
const app = express()
connectionDB();

// Middlewares
app.use(express.json());
app.use("/api/auth",authRoutes);

 app.listen(config.port,()=>{
    console.log(`Server is running on port http://localhost:${config.port}`.yellow);
 })

 






















