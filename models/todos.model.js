const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 20,
    },
    status: {
      type: String,
      enum: ["to-do", "in-progress", "done"],
      default: "to-do",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
