import express from 'express';
const router = express.Router();
import {
    addBrand,
    allBrand
} from '../controllers/brand.controller.js';

// Add Brand
router.post('/add_brand', addBrand);
// All Brand
router.get('/all_brand', allBrand);

export default router;