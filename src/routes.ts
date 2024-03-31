import {  Router } from "express";
import { getAll } from "./controllers/GetAllGames";
import { purchase } from "./controllers/Purchase";

const router = Router();

                                                                                                                                                                                                                                                                                      
router.get("/api/games", getAll)
router.put("/api/games/:idGame/:idStore", purchase)



export default router