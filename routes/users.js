const mongoose  = require('mongoose') ; 
const plm =  require("passport-local-mongoose")
 
mongoose.connect("mongodb://0.0.0.0:27017/pin") ;
 

const userSchema=  mongoose.Schema({
  username:String , 
  name :String  , 
  email:String ,  
  fullname:String, 
  password:String,
  profileImage:String ,  
  contact:Number , 
  boards:{
    type:Array , 
    default:[],
  },
  posts:[
    {
type:mongoose.Schema.Types.ObjectId, 
ref:"post"
    }
  ] ,
  
})
  
userSchema.plugin(plm) ;

 module.exports = mongoose.model("user", userSchema) ;