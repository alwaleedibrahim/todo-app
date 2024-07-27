const Users = require("./../models/users.model");
const Todos = require("../models/todos.model");

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id).select("-password");
    if (user) {
      return res.status(200).json({ status: "success", data: user });
    } else {
      return res.status(404).json({ status: "Not found" });
    }
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await Users.find().select("username -_id");
    if (!users) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ status: "success", data: users });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    }).select("-password");
    if (!user) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ status: "success", data: user });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.create = async (req, res) => {
    console.log(req.body)
  try {
    await Users.create(req.body);
    res.status(201).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ status: "Not found" });
    }
    res.status(204).json();
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};

exports.login = (req, res) => {};

exports.getTodos = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await Todos.find({ userId: id });
    if (!todos) {
        return res.status(404).json({ status: "Not found" });
    }
    res.status(200).json({ status: "success", data: todos });
  } catch (err) {
    res.status(400).json({ status: "failed", message: err.message });
  }
};
