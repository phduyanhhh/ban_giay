import express from 'express';
const router = express.Router();

import {
    addWarehouse,
    allWarehouse,
    anWarehouse
} from '../controllers/warehouse.controller.js';

router.post('/add', addWarehouse);
router.get('/all', allWarehouse);
router.get('/:id', anWarehouse);

export default router;