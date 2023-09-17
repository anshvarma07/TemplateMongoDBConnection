const express=require("express");
const cors=require("cors");


const app=express();

require('dotenv').config({path:'./config.env'})
const port=process.env.PORT || 5000;


// use Middlewares


app.use(cors());
app.use(express.json())

// Mongo Connection
const con=require(('./db/connection.js'))

app.use(require('./routes/route'));


app.listen(port,()=>{
    console.log(`Server running on Port : ${port}`)
});