var express = require('express');
const { userChannels,userLogin } = require('../controllers/userControllers');
var router = express.Router();


/* GET users listing. */
router.get('/',userLogin);

router.get('/channels',userChannels)



module.exports = router;
