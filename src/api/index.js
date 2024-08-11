import express from 'express';
import BrandRouter from './routers/brand.router.js';
import ProductRouter from './routers/product.router.js';
import ClassifyRouter from './routers/classify.router.js';
import WarehouseRouter from './routers/warehouse.router.js';
import RoleRouter from './routers/role.router.js';
import PathRouter from './routers/path.router.js';

const router = express.Router();

router.use('/brand', BrandRouter);
router.use('/product', ProductRouter);
router.use('/classify', ClassifyRouter);
router.use('/warehouse', WarehouseRouter);
router.use('/role', RoleRouter);
router.use('/path', PathRouter)

export default router;