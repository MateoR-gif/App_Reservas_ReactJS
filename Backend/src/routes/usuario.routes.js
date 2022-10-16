import { Router } from "express";
import {createNewUsuario, getUsuario} from "../controllers/usuario.controller"

const router = Router();

router.get('/usuario', getUsuario);

router.post('/usuario', createNewUsuario);

export default router