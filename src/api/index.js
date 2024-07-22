import express from 'express';
import BrandRouter from './routers/brand.router.js';
import ProductRouter from './routers/product.router.js';
const router = express.Router();

router.use('/brand', BrandRouter);
router.use('/product', ProductRouter);

export default router;