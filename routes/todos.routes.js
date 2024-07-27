const express = require("express")
const {getAll, getOne, create, update, deleteOne} = require("../controllers/todos.controller")

const router = express.Router()

router.get("/", getAll)
router.get("/:id", getOne)
router.post("/", create)
router.patch("/:id", update)
router.delete("/:id", deleteOne)

module.exports = router