const express = require("express")
const upload = require("./../middleware/upload")

const {getAll, getOne, create, update, deleteOne, login, getTodos} = require("../controllers/users.controller")

const router = express.Router()

router.get("/:id/todos", getTodos)
router.get("/", getAll)
router.get("/:id", getOne)
router.post("/", upload.single("avatar") ,create)
router.patch("/:id", update)
router.delete("/:id", deleteOne)
router.post('/login', login)


module.exports = router