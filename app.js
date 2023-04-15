require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


//imports
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/cloth");
const categoryRoutes = require("./routes/category")

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//Routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",productRoutes);
app.use("/api",categoryRoutes);


//Database Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(() =>{
    console.log("DB Connected")
}).catch(() => {
    console.log("DB not Connected")
});


 //Starting a Server
 app.listen(process.env.PORT,() =>{
     console.log(`app is running at ${process.env.PORT}`);
 });