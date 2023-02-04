


module.exports = {
   userLogin: (req, res) => {
      res.status(200).json({ message: "loginn sucess" });
   },

   userChannels: (req, res) => {
      try {
         res.status(200).json({ message: "user channel get" })
      } catch (err) {

      }
   },

   userSignup:(req,res)=>{
      // console.log(req.body,"this is the body")
    console.log(req.body)
      if(req.body){
         res.status(200).json({message:"ok sucess"})
      }else{
         res.status(500).json({message:"no body"})
      }
      // let {name,email,password}= req.body;
   }
}