const express = require('express')
//app = express
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config();
const methodOverride = require('method-override');
const multer = require('multer');
var crypto = require('crypto');
var path = require('path');
const port = process.env.port || 8002;
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://root:magazineapp@zinecloud.q4jigrz.mongodb.net/?retryWrites=true&w=majority'
const {
    GridFsStorage
  } = require("multer-gridfs-storage");



//import routes for ADDING ZINES
const routes = require('./routes/mainroutes');
const router = require('./routes/mainroutes');


//app.use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
  }));


app.use('/',routes);

app.listen(port, ()=>{
    console.log("Server connected")
})

//app.listen