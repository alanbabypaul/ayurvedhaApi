import { Router } from 'express';
import { customerController } from '../Controllers/customer/customerController'

const router = Router();

router.get('/', customerController.getAllUsers);
router.get('/:id', customerController.getUserById);
// Add other routes for CRUD operations

export default router;
