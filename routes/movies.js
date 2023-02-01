import { Router } from "express";
var router = Router();


import MoviesController from "../controllers/MoviesController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
//router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/", verifyToken, MoviesController.getAll);
router.get("/:id", verifyToken, MoviesController.get);
router.post("/:id/rent", verifyToken, MoviesController.rent);

export default router;