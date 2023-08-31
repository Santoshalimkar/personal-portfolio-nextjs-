import mongoose from "mongoose";



const Resumeschema= new mongoose.Schema({
  
    project_title:{
        type:String,
    },
    project_subtitle:{
        type:String,
    },
    
    project_description:{
        type:String,
    },
    project_image:{
        type:String,
    },
    
})



const Resume=mongoose.model('PortfolioDetails',Resumeschema)

module.exports=Resume