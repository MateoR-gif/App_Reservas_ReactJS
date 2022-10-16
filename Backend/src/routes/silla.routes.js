import { Router } from "express";
import {getSillas, getSillabyId} from "../controllers/silla.controller"

const router = Router();

router.get('/silla', getSillas);

router.get('/silla/:id', getSillabyId)

export default router