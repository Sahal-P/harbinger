var express = require('express');
const { userChannels,userLogin,userSignup } = require('../controllers/userControllers');
var router = express.Router();


/* GET users listing. */
router.get('/',userLogin);

router.get('/channels',userChannels);

router.post('/postUser',userSignup)



module.exports = router;
