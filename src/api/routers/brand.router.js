import express from 'express';
const router = express.Router();
import {
    addBrand,
    allBrand,
    anBrand,
    deleteBrand,
    updateBrand
} from '../controllers/brand.controller.js';

// Add Brand
router.post('/add_brand', addBrand);
// All Brand
router.get('/all_brand', allBrand);
// An Brand
router.get('/an_brand/:id', anBrand);
// Update Brand
router.put('/update_brand/:id', updateBrand);
// Delete Brand
router.delete('/delete_brand/:id', deleteBrand);

export default router;