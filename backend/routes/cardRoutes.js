import express from 'express';
import { generateCard, getAllPeople, getPersonById} from '../controllers/cardController.js';

const router = express.Router();

router.post('/generate', generateCard);
router.get('/people', getAllPeople);
router.get('/people/:id_pessoa', getPersonById);

export default router;
