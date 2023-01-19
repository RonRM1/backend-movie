import { Router } from "express";
var router = Router();

// var express = require("express");
// var router = express.Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
//router.get("/", UserController.getAll); 
// router.patch("/users/:user_id/rent/:movie_id")


export default router;
