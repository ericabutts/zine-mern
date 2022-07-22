const router = require('express').Router();
const methodOverride = require('method-override');
const multer = require('multer');
var crypto = require('crypto');
var path = require('path');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.port || 8002;
const mongoURI = 'mongodb+srv://root:magazineapp@zinecloud.q4jigrz.mongodb.net/?retryWrites=true&w=majority'
const {GridFsStorage} = require("multer-gridfs-storage");


const ZineModel = require('../model');

//connect mongoose
try {
    mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (error) {
    handleError(error);
  }
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error);
  });
  
  //creating bucket
  let bucket;
  mongoose.connection.on("connected", () => {
    var db = mongoose.connections[0].db;
    bucket = new mongoose.mongo.GridFSBucket(db, {
      bucketName: "newBucket"
    });
    console.log(bucket);
  });

  const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "newBucket"
        };
        resolve(fileInfo);
      });
    }
  });

  const upload = multer({
    storage
  });

  router.get("/fileinfo/:filename", (req, res) => {
    const file = bucket
      .find({
        filename: req.params.filename
      })
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404)
            .json({
              err: "no files exist"
            });
        }
        bucket.openDownloadStreamByName(req.params.filename)
          .pipe(res);
      });
  });

  router.post("/upload", upload.single("file"), async (req, res,next) => {
    const url = req.protocol + '://' + req.get('host')
    try{
        const zineUpload = new ZineModel({
            _id: new mongoose.Types.ObjectId(),
            title:req.body.title,
            author:req.body.author,
            description:req.body.description,
            authorID:req.body.authorID,
            hashtags:req.body.hashtags,
            file: url + '/public/' + req.file.filename
  
        });

    zineUpload.save().then(result=>{
        res.status(201).json({
            message:"Uploaded successfully!",
            zineCreated:{
                _id:result._id,
                file:result.file
            }
        })
    }).catch(error=>{
        console.log(error),
        res.status(500).json({
            error:error
        });
    })

    }catch(error){
        res.send(error);

    }
  });


router.post('/api/zine',async(req,res)=>{
    try{
        //add a new zine
    const newZine = new ZineModel({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description,
        authorID:req.body.authorID,
        hashtags:req.body.hashtags
        
    })
    //save to Monogod
    const saveZine = await newZine.save();
    res.status(200).json(saveZine);

    }catch(error){
        res.json(error)
    }
})

router.get('/api/zine',async(req,res)=>{
    try{
        const allZines = await ZineModel.find({});
        res.status(200).json(allZines);

    }catch(error){
        console.log(error);
    }
})

router.put('/api/zine/:id',async(req,res)=>{
    try{
        //update zine
        const updateZine = await ZineModel.findByIdAndUpdate(req.params.id,{$set:req.body});
        res.status(200).json("Zine updated");

    }
    catch(error){
        console.log(error);
    }
})

router.get('/api/zine/:id',async (req,res)=>{
    var id = req.params.id
    try{
        const myZine = await ZineModel.findById(id);
        res.status(200).json(myZine)
    }catch(error){
        console.log(error);
    }
})

router.delete('/api/zine/:id',async (req,res)=>{
    try{
        const deleteZine = await ZineModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Zine was deleted")

    }catch(error){
        console.log(error);

    }


})







module.exports=router;