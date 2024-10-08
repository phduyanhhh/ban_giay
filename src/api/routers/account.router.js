import express from 'express';
import { verifyToken, checkUser} from '../../middlewares/auth.middleware.js';
const router = express.Router();

import {
    register,
    login,
    allAccount
} from '../controllers/account.controller.js';

router.post('/register', register);
router.post('/login' ,login);
router.get('/account/all', allAccount);

export default router;