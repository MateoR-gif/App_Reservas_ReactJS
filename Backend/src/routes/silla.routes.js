import { Router } from "express";
import {getSillas} from "../controllers/silla.controller"

const router = Router();

router.get('/silla', getSillas);

export default router