import express from 'express';
const router = express.Router();
import {
    addRole,
    allRole,
    deleteRole
} from '../controllers/role.controller.js'

router.post('/add', addRole);
router.get('/all', allRole);
router.delete('/delete/:slug', deleteRole);

export default router;