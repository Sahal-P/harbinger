const mongoose=require('mongoose');



const User= new mongoose.Schema({
    userName:{type:String,required:true},

},
{ collection:'users'}
)


const model=mongoose.model('UserData',User);


module.exports=model