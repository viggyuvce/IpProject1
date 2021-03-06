var Controllers = require('./controllers.js');
//var passport = requ
module.exports = function (app,passport) {
	
	app.get('/download/mp3/:id', function(req, res){
  		Controllers.downloader.getMp3(req,res);
	});
	app.get('/download/sheet/:id', function(req, res){
  		Controllers.downloader.getSheet(req,res);
	});
	app.get('/download/certificate/:id', function(req, res){
		Controllers.downloader.getCertificate(req,res);
  });
	/*
	app.post("/api/insertComposer",function(req,res){
		Controllers.insertComposer.insertComposer(req,res);
	});
	app.options("/api/insertComposer", function (req, res) {
		Controllers.optionController.handler(req, res);
	});
	app.post("/api/insertInstrument",function(req,res){
		Controllers.insertInstrument.insertInstrument(req,res);
	});
	app.options("/api/insertInstrument", function (req, res) {
		Controllers.optionController.handler(req, res);
	});
	app.post("/api/insertGenre",function(req,res){
		Controllers.insertGenre.insertGenre(req,res);
	});
	app.options("/api/insertGenre", function (req, res) {
		Controllers.optionController.handler(req, res);
	});
	
	app.get("/api/showComposerId/:composerId",function(req,res){
		Controllers.showComposerId.postComposerId(req,res);
	});
	app.get("/api/showComposerGenre/:composerId",function(req,res){
		Controllers.showComposerGenre.postComposerGenre(req,res);
	});
	app.get("/api/showGenreComposer/:genreId",function(req,res){
		Controllers.showGenreComposer.postGenreComposer(req,res);
	});
	app.get("/api/showComposerGenreMusic/:composerId/:genreId",function(req,res){
		Controllers.showComposerGenreMusic.postComposerGenreMusic(req,res);
	});
	app.get("/api/showComposer",function(req,res){
		Controllers.showComposer.showComposer(req,res);
	});
	app.get("/api/showGenreId/:genreId",function(req,res){
		Controllers.showGenreId.postGenreId(req,res);
	});
	app.get("/api/showMusicId/:musicId",function(req,res){
		Controllers.showMusicId.postMusicId(req,res);
	});
	app.get("/api/showGenre",function(req,res){
		Controllers.showGenre.showGenre(req,res);
	});*/
	app.get('/getMusic/:grade/:rank',function(req,res){
		Controllers.getMusic.getMusic(req,res);
	});
	app.options("/insertMusic", function (req, res) {
		Controllers.optionController.handler(req, res);
	});
	app.post("/insertMusic",function(req,res){
		Controllers.insertMusic.insertMusic(req,res);
	});
	app.get('/getCompletedRanks/:id',function(req,res){
		Controllers.getCompletedRanks.getCompletedRanks(req,res);
	});
	app.get('/getCompletedGrades/:id',function(req,res){
		Controllers.getCompletedGrades.getCompletedGrades(req,res);
	});
	app.get('/update/:id/:grade/:rank',function(req,res){
		Controllers.updateRank.updateRank(req,res);
	});
	app.get('/getName/:id',function(req,res){
		Controllers.getName.getName(req,res);
	});
	app.options("/login",function(req,res){
		Controllers.optionController.handler(req,res);
	});
	app.options("/signup",function(req,res){
		Controllers.optionController.handler(req,res);
	});
	app.post('/login', function (req, res, next) {
		passport.authenticate('local-login', function (err, user, info) {
			console.log(info);
			if (err) {
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Content-Type', 'application/json');
				res.status(200).send(JSON.stringify({
					"success":false,
					"msg": "Internal Server Error"
				}));
				return;
			}
			if (!user) {
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Content-Type', 'application/json');
				res.status(200).send(JSON.stringify({
				"success":false,
				"msg":"No such user"
			}));

			}
			if(user && !info){
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Content-Type', 'application/json');
				res.status(200).send(JSON.stringify({
				"success":false,
				"msg":"wrong password"
				}));						
			}
			else {
				sess = req.session;
				sess.id = user.dataValues.id;
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Content-Type', 'application/json');
				res.status(200).send(JSON.stringify(user.dataValues.id));
				if (req.body.remember) {
					req.session.cookie.maxAge = 1000 * 60 * 3;
				} else {
					req.session.cookie.expires = false;
				}
			}
		})(req, res);
	});
	app.get('/profile',function(req,res){
		sess = req.session;
		if(sess.id){
			console.log(sess.id)
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify({
			"success":true,
			"msg":"session running"
			}));		
		}
	});
	app.post('/signup', function(req, res) {
	        passport.authenticate('local-signup', function(err, user, info) {
	        if (err) {
	            res.header('Access-Control-Allow-Origin','*');
				res.header('Content-Type','application/json');
	             res.status(200).send(JSON.stringify({
					 'success':false,
	                'msg': "Internal Server Error"+info+user
	            }));
	        }
	        if (user && info==true) {
	            res.header('Access-Control-Allow-Origin','*');
				res.header('Content-Type','application/json');
	           res.status(200).send(JSON.stringify({
				   'success':true,
	                'msg': "new user"+info+user
	            }));
	        }
	        if (user && info==false) {
	            res.header('Access-Control-Allow-Origin','*');
				res.header('Content-Type','application/json');
	            res.status(200).send(JSON.stringify({
					'success':false,
	                'msg': "That username is already taken "+" "+req.body.username+user,

	            }));

	        }
	    })(req, res);
	});

};

