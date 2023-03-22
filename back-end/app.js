const bodyParser = require('body-parser');//extracts the entire body portion of an incoming request stream and exposes it on req.body
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require("express-validator");//validate user data
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');//is a Nodejs and Express middleware to log HTTP requests and errors, and simplifies the process.


require('dotenv').config();


// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");


//app
const app = express();
//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
})
.then(()=> console.log('DATABASE CONNECTED'));


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


//routes middleware
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log('running');
})
