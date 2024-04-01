import {  Router } from "express";
import { getAll } from "./controllers/GetAllGames";
import { purchase } from "./controllers/Purchase";
import { getById } from "./controllers/GetById";

const router = Router();

                                                                                                                                                                                                                                                                                      
router.get("/api/games", getAll)
router.put("/api/games/:idGame/:idStore", purchase)
router.get("/api/games/:idGame", getById)



export default router