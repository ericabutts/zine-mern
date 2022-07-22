const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//describe schema

let Zine = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    file:{
        type:String,
        required:true
    },

    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    authorID: {
        type:String,
        // required:true
    },
    hashtags: {
        type:String,
        required:true
    }
},{
    collection:'zines'
});


//export the schema called Zine
module.exports=mongoose.model('Zine',Zine);