const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book_routes');
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000


mongoose.connect("mongodb+srv://admin:AIKY5opSTxh8HEPd@cluster0.riev2ii.mongodb.net/test")
.then(() => console.log("connected database"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log(err));

//AIKY5opSTxh8HEPd
