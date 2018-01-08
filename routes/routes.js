import express, { Router } from 'express';
import { getCodes, postCodes } from '../controllers/codeController';

const router = Router();

router.route('/codes').get(getCodes);
router.route('/codes').post(postCodes);

export default router;