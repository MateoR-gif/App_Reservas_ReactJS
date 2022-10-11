import { Router } from "express";

const router = Router();

router.get('/silla', (req, res) => res.send('SILLAS!!!!!!!'))

export default router