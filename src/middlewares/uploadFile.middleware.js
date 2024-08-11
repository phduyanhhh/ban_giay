import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloundinary.js';

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'shop-shoes',
        format: 'jpg',
    }
})

const upload = multer({ storage });

export default upload;