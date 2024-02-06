import { Router } from 'express';
import userRoutes from  './userRoute';
import customerRoutes from './customerRoute';
const router = Router();

router.use('/users', userRoutes);
router.use('/customers', customerRoutes);

export default router;
