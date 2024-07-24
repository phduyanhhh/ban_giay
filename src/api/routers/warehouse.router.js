import express from 'express';
const router = express.Router();

import {
    addWarehouse,
    allWarehouse
} from '../controllers/warehouse.controller.js';

router.post('/add_warehouse', addWarehouse);
router.get('/all_warehouse', allWarehouse);

export default router;