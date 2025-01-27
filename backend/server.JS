
import express from "express";
import colors from "colors"
import config from "./config/config.js"
import authRoute from "./routers/auth.route.js"

const app = express();

// midlewares 
app.use("/api/v1/auth",authRoute)

app.listen(config.port, () => {
  
    console.log(`Server is running on port http://localhost:${config.port}`.cyan);
})