var models=require('../models');
var music=models['music'];
var instrument=models['instrument'];
var link=models['link'];
module.exports ={
     insertMusic : function insertMusic(req,res){
       var musicData = {
        title: req.body.title,
		scale : req.body.scale,
		description : req.body.description,
        composers: req.body.composers,
		link: req.body.link,
        grade: req.body.grade,
		rank: req.body.rank,
        };
      music.create(musicData)
                            .then(function(DAO){
                                var id = DAO.dataValues.id;
                                console.log(id);      
                                res.header('Access-Control-Allow-Origin','*');
                                res.header('Content-Type','application/json');                          
                                res.json({"lastInserted":id,"success":true});
                            })
                            .catch(function(err){
                                res.header('Access-Control-Allow-Origin','*');
                                res.header('Content-Type','application/json');
                                console.log(err);
                                res.json({"success":false,"error":err});
                            });
    }
}
