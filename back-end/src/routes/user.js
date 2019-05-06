
import { create, authenticate } from '../controllers/user.controller';
import { Router } from 'express';
const router = Router();

router.post('/register', create);
router.post('/authenticate', authenticate);

module.exports = router;