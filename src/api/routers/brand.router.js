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
router.post('/add', addBrand);
// All Brand
router.get('/all', allBrand);
// An Brand
router.get('/:slug', anBrand);
// Update Brand
router.put('/update/:slug', updateBrand);
// Delete Brand
router.delete('/delete/:slug', deleteBrand);

export default router;