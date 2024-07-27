const express = require("express")
const todosRouter = require("./routes/todos.routes")
const usersRouter = require("./routes/users.routes")

require("dotenv").config()


require("./models/dbconnection")

const app = express() 
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use("/todos", todosRouter)
app.use("/users", usersRouter)

const {PORT} = process.env
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})