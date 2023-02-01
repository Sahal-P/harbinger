


module.exports={
     userLogin:(req,res)=>{
        res.status(200).json({message:"loginn sucess"});
     },

     userChannels:(req,res)=>{
        res.status(200).json({message:"user channel get"})
     }
}