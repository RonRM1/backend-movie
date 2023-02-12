import { Router } from "express";
var router = Router();

// var express = require("express");
// var router = express.Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/:id", verifyToken, isSuperAdmin, UserController.get);
router.put("/:id", verifyToken, isSuperAdmin, UserController.update);
router.delete("/:id", verifyToken, isSuperAdmin, UserController.delete);
router.get("/:id/movies", verifyToken, UserController.getRentalMovies);


export default router;
