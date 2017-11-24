var models=require('../models');
var music=models['music'];
var instrument=models['instrument'];
var link=models['link'];
module.exports ={
     insertMusic : function insertMusic(req,res){
       var musicData = {
            title: req.body.title,
            description: req.body.description,
            code: req.body.code,
            scale: req.body.scale,
            level: req.body.level,
            youtubeLink : req.body.youtubeLink,
            hits: 0,
            composerId : req.body.composerId,
            genreId : req.body.genreId
        };
      music.create(musicData)
                            .then(function(DAO){
                                var id = DAO.dataValues.id;
                                var links = req.body.hyperlinks;
                                links.forEach(function(element){
                                    link.create({"musicId":id,"hyperlink":element});
                                },this);
                                res.json({"lastInserted":id,"success":true});
                            })
                            .catch(function(err){
                                res.json({"success":false,"error":err});
                            });
    }
}
