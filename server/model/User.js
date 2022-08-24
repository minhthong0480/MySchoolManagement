const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    isTeacher: {
      type: Boolean,
      default: false,
    },

    // date: {
    //     type: Date,
    //     default: Date.now
    // }
  },
  { timeStamps: true }
);

//hash password

// userSchema.pre("save", function (next) {
//   let user = this;
//   if (user.isModified("password")) {
//     return bcrypt.hash(user.password, 12, function (err, hash) {
//       if (err) {
//         console.log("BCRYPT HASH ERR", err);
//         return next(err);
//       }
//       user.password = hash;
//       return next();
//     });
//   } else {
//     return next();
//   }
// });

module.exports = mongoose.model("User", userSchema);
