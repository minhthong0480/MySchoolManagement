const mongoose = require("mongoose");

const { Schema } = mongoose;
var { ObjectId } = require('mongodb').ObjectId

const studentSchema = new Schema(
  {
    studentName:{
      type: String,
      required: "Student name is required",
    },

    phoneNumber: {
      type: Number,
    },

    age: {
      type: Number,
    },

    note: {
      type: String,
      max: 1000,
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
