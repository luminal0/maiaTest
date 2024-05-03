import express from 'express';
import cors from 'cors';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

router.get('/');
router.post('/api/register', registerUser);
router.post('/api/login', loginUser);

export default router;