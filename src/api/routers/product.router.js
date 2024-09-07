import express from 'express';
import upload from '../../middlewares/uploadFile.middleware.js';
const router = express.Router();
import {
    addProduct,
    allProduct,
    anProduct,
    deleteProduct,
    updateProduct,
    updateAvatar,
    updateImage,
    paginatorPage
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
// Update avatar
router.put('/update-avatar/:slug', upload.single('avatar'), updateAvatar);
// Update Images
router.put('/update-image/:slug', upload.array('images', 10), updateImage);
// PAGINATOR 
// router.get('      /:page', paginatorPage);

export default router;