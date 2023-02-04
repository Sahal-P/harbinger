var express = require('express');
const { userChannels,userLogin,userSignUp } = require('../controllers/userControllers');
var router = express.Router();


/* GET users listing. */
router.get('/',userLogin);

router.get('/channels',userChannels);

router.post('/postUser',userSignUp)



module.exports = router;
