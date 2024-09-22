import express from 'express';
// const validatetoken = require("../middleware/validatetokenhandler");
import validatetoken from '../middleware/validatetokenhandeler.js';
import UserController from '../controllers/user_controller.js';

const { Reguser, Loginuser , Currentuser} = UserController

const router = express.Router();

router.post("/register",Reguser);

router.post("/login",Loginuser);

router.get("/current", validatetoken ,Currentuser);

export default router;