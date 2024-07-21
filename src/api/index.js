import express from 'express';
import BrandRouter from './routers/brand.router.js';
const router = express.Router();

router.use('/brand', BrandRouter);

export default router;