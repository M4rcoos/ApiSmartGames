import {  Router } from "express";
import { getAll } from "./controllers/Games";

const router = Router();

                                                                                                                                                                                                                                                                                      
router.get("/api/games", getAll)



export default router