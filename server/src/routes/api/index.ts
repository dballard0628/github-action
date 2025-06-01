import express from 'express';
const router = express.Router();
import questionRoutes from '.client/mocks/questionRoutes';

router.use('/questions', questionRoutes);

export default router;