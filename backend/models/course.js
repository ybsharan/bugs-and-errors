import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  classLevel: {
    type: String,
    required: true,
  },
  pricing: {
    type: String,
    required: true,
  },
  classdurationFrom: {
    type: Date,
    required: true,
  },
  classdurationTo: {
    type: Date,
    required: true,
  },
  modeoflearning: {
    type: String,
    required: true,
  },
  classtime: {
    type: [
      {
        startTime: String,
        endTime: String,
      },
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Course = mongoose.model('Course', schema);
