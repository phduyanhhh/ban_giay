import express from 'express';
import upload from '../../middlewares/uploadFile.middleware.js';
const router = express.Router();
import {
    addProduct,
    allProduct,
    anProduct,
    deleteProduct,
    updateProduct
} from '../controllers/product.controller.js';

const multipleUploadProduct = upload.fields([
    {name: 'avatar', maxCount : 1},
    {name: 'images', maxCount : 10}
])

// Add Product
router.post('/add', multipleUploadProduct, addProduct);
// All Product
router.get('/all', allProduct);
// An Product
router.get('/:slug', anProduct);
// Update Product
router.put('/update/:slug', updateProduct);
// Delete Product
router.delete('/delete/:slug', deleteProduct);
//
// router.post('/add/:slug', addImage);

export default router;