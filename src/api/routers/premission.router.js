import express from "express";
const router = express.Router();
import {
    addPremission,
    allPremission,
    deletePremission
} from '../controllers/premission.controller.js';

router.post('/add', addPremission);
router.get('/all', allPremission);
router.delete('/delete/:id', deletePremission);

export default router;