import { Course } from '../models/course.js';

export const newCourse = async (req, res, next) => {
  const {
    title,
    classLevel,
    pricing,
    classdurationFrom,
    classdurationTo,
    modeoflearning,
    classtime,
    description,
  } = req.body;
  const course = await Course.create({
    title,
    classLevel,
    pricing,
    classdurationFrom,
    classdurationTo,
    modeoflearning,
    classtime,
    description,
  });

  res.status(201).json({
    success: true,
    message: 'Course Added Successfully',
    data: course,
  });
};

export const deleteCourse = async (req, res, next) => {
  const course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).json({
      success: false,
      message: 'Invalid ID',
    });

  await course.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Course Deleted',
  });
};

export const editCourse = async (req, res, next) => {
  const courseId = req.params.id;
  const {
    title,
    classLevel,
    pricing,
    classdurationFrom,
    classdurationTo,
    modeoflearning,
    classtime,
    description,
  } = req.body;

  try {
    const course = await Course.findById(courseId);

    course.title = title;
    course.classLevel = classLevel;
    course.pricing = pricing;
    course.classdurationFrom = new Date(classdurationFrom);
    course.classdurationTo = new Date(classdurationTo);
    course.modeoflearning = modeoflearning;
    course.classtime = classtime;
    course.description = description;

    await course.save();

    res.status(200).json({
      success: true,
      message: 'Course Updated Successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the course',
      error: error.message,
    });
  }
};

export const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      success: true,
      message: 'Courses Retrieved Successfully',
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the courses',
      error: error.message,
    });
  }
};
