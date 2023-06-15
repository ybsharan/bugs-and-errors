import express from 'express';
import {
  newCourse,
  deleteCourse,
  editCourse,
  getAllCourses,
} from '../controllers/course.js';

const router = express.Router();

router.post('/new', newCourse);

router.delete('/:id', deleteCourse);

router.put('/:id', editCourse);

router.get('/all', getAllCourses);

export default router;
