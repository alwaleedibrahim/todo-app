const Todos = require("../models/todos.model");

exports.getAll = async (req, res) => {
  const skip = req.query.skip? parseInt(req.query.skip) : 0
  const limit = req.query.limit? parseInt(req.query.limit) : 10
  try {
    const todos = await Todos.aggregate([
      {$skip: skip},
      {$limit: limit}
    ]);
    if (!todos) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ status: "success", data: todos });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todos.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true
    });
    if (!todo) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ status: "success", data: todo });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    await Todos.create(req.body);
    res.status(201).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todos.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.getOne = (req, res) => {};
