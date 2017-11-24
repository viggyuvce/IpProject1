var models=require('../models');
var genre=models['genre'];


module.exports ={
     insertGenre : function insertGenre(req,res){
       var genreData = {
            title: req.body.title,
            description: req.body.description,
        };
      genre.create(genreData)
                            .then(function(DAO){
                                var id = DAO.dataValues.id;
                                res.json({"lastInserted":id,"success":true});
                            })
                            .catch(function(err){
                                res.json({"success":false});
                            });
    }
}

