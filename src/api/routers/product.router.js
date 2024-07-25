import express from 'express';
const router = express.Router();
import {
    addProduct,
    allProduct,
    anProduct,
    deleteProduct,
    updateProduct
} from '../controllers/product.controller.js';

// Add Product
router.post('/add', addProduct);
// All Product
router.get('/all', allProduct);
// An Product
router.get('/:slug', anProduct);
// Update Product
router.put('/update/:slug', updateProduct);
// Delete Product
router.delete('/delete/:slug', deleteProduct);

export default router;