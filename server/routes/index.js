var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    res.send({greeting: 'Hello React x Node.js'});
});

router.post('/test', (req,res)=>{
    res.send({success: true});
})

module.exports = router;
