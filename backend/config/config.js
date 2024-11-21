
import dotenv from "dotenv";
dotenv.config();
 const config = {
    port:process.env.PORT || 5000,
    mong_url : process.env.MONG_URL
}

export default config