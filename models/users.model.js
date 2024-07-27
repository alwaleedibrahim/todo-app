const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 8,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    dob: {
      type: Date,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
