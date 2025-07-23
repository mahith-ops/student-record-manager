import express from 'express';
import  {getStudents}  from '../controllers/studentControllers.js';
import  {createStudent} from '../controllers/studentControllers.js';
import  {updateStudent } from '../controllers/studentControllers.js';  
import  {deleteStudent} from '../controllers/studentControllers.js';

import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/',protect, getStudents);
router.post('/',protect, createStudent);
router.put('/:id',protect, updateStudent);
router.delete('/:id',protect, deleteStudent);

export default router;
