const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
	unique:true,
    }

   
},{timeStamp:true}
);
module.exports= mongoose.model("Category", categorySchema);
