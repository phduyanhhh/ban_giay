import express from 'express';
const router = express.Router();
import {
    addClassify,
    allClassify,
    anClassify,
    deleteClassify,
    updateClassify
} from '../controllers/classify.controller.js';

// Add Classify
router.post('/add', addClassify);
// All Classify
router.get('/all', allClassify);
// An Classify
router.get('/:slug', anClassify);
// Update Classify
router.put('/update/:slug', updateClassify);
// Delete Classify
router.delete('/delete/:slug', deleteClassify);

export default router;