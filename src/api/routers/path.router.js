import express from 'express';
const router = express.Router();

import {
    addPath,
    allPath,
    deletePath
} from '../controllers/path.controller.js';

router.post('/add', addPath);
router.get('/all', allPath);
router.delete('/delete/:slug', deletePath);

export default router;