const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

//create storage engine


const dotenv = require('dotenv').config();
const port = process.env.port || 8002;
const mongoose = require('mongoose');

//import routes for ADDING ZINES
const routes = require('./routes/mainroutes');
const router = require('./routes/mainroutes');

//connect mongoose
mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log("Connected to Monogod")
}).catch(err=>{
    console.log(err)
})

//app = express
const app = express();

//gridFS


//app.use
app.use(cors());
app.use(express.json());
app.use('/',routes);

app.listen(port, ()=>{
    console.log("Server connected")
})

//app.listen