import express from 'express';
import getReposExplore from '../controllers/explore.controller.js';
import { ensureAuth } from '../middlewares/ensureAuth.js';

const router = express.Router();

router.get('/repositories/:lang', ensureAuth, getReposExplore);

export default router;