import { Router } from 'express';
import * as pageController from '../controllers/pageController';
import * as seachController from '../controllers/seachController';
const router = Router();


router.get('/', pageController.home);
router.get('/dogs',pageController.dogs);
router.get('/cats',pageController.cats);
router.get('/fishes',pageController.fishes);
router.get('/seach',seachController.seach);

export default router;

