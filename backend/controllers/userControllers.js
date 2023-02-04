const User = require('../model/userModel')

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

   userSignUp: async (req, res) => {
      try {

         if (req.body) {
            User.create({
               userName: req.body.name
            }).then((data) => {

               res.status(200).json({ message: "sucess",userdata:data })
            }).catch((err) => {
               console.log("mongooose error", err);
               res.status(500).json({ message: "mongoose errror" })
            })

         } else {
            res.status(500).json({ message: "no body" })
         }
      } catch (err) {
         console.log(err)
         res.status(500).json({ message: "error occured" })
      }
      // let {name,email,password}= req.body;
   }
}