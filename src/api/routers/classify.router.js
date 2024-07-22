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
router.post('/add_classify', addClassify);
// All Classify
router.get('/all_classify', allClassify);
// An Classify
router.get('/an_classify/:id', anClassify);
// Update Classify
router.put('/update_classify/:id', updateClassify);
// Delete Classify
router.delete('/delete_classify/:id', deleteClassify);

export default router;