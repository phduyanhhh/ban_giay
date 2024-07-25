import express from 'express';
const router = express.Router();

import {
    addWarehouse,
    allWarehouse
} from '../controllers/warehouse.controller.js';

router.post('/add', addWarehouse);
router.get('/all', allWarehouse);

export default router;