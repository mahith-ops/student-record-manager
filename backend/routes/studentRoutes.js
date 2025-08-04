import express from 'express';
import  {getStudents, createStudent, updateStudent, deleteStudent, updateMarks}  from '../controllers/studentControllers.js';

import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/',protect, getStudents);
router.post('/',protect, createStudent);
router.put('/:id',protect, updateStudent);
router.delete('/:id',protect, deleteStudent);

router.put('/marks/update', updateMarks);

export default router;
