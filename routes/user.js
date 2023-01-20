import { Router } from "express";
var router = Router();

// var express = require("express");
// var router = express.Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/",  UserController.getAll);
router.get("/:id", UserController.get);
router.put("/:id",  UserController.update);
router.delete("/:id",  UserController.delete);
// router.patch("/users/:user_id/rent/:movie_id")

export default router;
