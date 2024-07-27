const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONNECTION)
.then(()=>{
    console.log("Connected to DB")
})
.catch((err) => {
    console.error(err)
})