
import e from "express";
import {login,logout,signup} from "../controller/auth.controller.js"
 
const router = e.Router();

router.get("/login",login)
router.get("/logout",logout)
router.get("/signup",signup)

export default router