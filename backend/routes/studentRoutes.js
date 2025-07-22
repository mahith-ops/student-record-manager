import express from 'express';
import  {getStudents}  from '../controllers/studentControllers.js';
import  {createStudent} from '../controllers/studentControllers.js';
import  {updateStudent } from '../controllers/studentControllers.js';  
import  {deleteStudent} from '../controllers/studentControllers.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
