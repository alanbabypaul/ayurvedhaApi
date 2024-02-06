import { Router } from 'express';
import { userController } from '../Controllers/user/userControllers'

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
// Add other routes for CRUD operations

export default router;
