const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.routes.js");
const  app = express();

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/ecommerce');


app.get('/', (req, res) => {
    res.send("Welcome to the E-commerce API");
});

app.use('/api/users', userRoutes)


app.listen(8080, () => console.log("server started at 8080"))

