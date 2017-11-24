var morgan = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var passport = require('passport');
var flash    = require('connect-flash');
var session  = require('express-session');
var Sequelize = require('./tools/db_sequelize.js');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var config = require('./config/configurations.js');
//var port     = process.env.PORT || 7878;


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
/*
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", false);
    next();
});*/
/*app.use(function(req, res, next) { //allow cross origin requests
    //res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.header("Access-Control-Allow-Credentials", true);
    next();
});*/
app.use(express.static(__dirname+'/uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", false);
    next();
});*/
app.use(session({
	secret: 'music is a higher revelation than philosophy',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
require('./config/passport')(passport);
/*
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});*/


//app.use(cors());
require('./routes.js')(app,passport);

 // use connect-flash for flash messages stored in session


var models = require('./models');
//console.log(models);
models.sequelize.sync({force:false}).then(function(){
    var port = 9889;
    app.listen(port);
    console.log(`listening at port ${port}`);

});




// configuration ===============================================================
// connect to our database

// set up our express application
 // load our routes and pass in our app and fully configured passport

// launch ======================================================================
//app.listen(7878);
//console.log('The magic happens on port ' + port);
