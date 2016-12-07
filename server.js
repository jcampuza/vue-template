var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Allow cross origin
app.use(function(req,res,next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});


var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(request, response) {
	response.json({ message: 'this is your api!'});
})

// other route registration
app.use('/api', router);
app.listen(port);
console.log('Magic occurs on port ' + port);