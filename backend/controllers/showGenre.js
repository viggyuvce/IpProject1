var models=require('../models');
var genre=models['genre'];

module.exports ={
    showGenre : function showGenre(req,res){
        genre.findAll()
                        .then(function (genres){
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
		    return res.json(genres);
        });

    }
}
