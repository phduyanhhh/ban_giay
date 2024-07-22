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
router.post('/add_product', addProduct);
// All Product
router.get('/all_product', allProduct);
// An Product
router.get('/an_product/:id', anProduct);
// Update Product
router.put('/update_product/:id', updateProduct);
// Delete Product
router.delete('/delete_product/:id', deleteProduct);

export default router;