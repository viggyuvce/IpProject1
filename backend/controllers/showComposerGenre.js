"use strict";
var models=require('../models');
var composer=models['composer'];
var music=models['music'];
var genre = models['genre'];

module.exports={
    postComposerGenre:function postComposerGenre(req,res){
        var id=req.params.composerId;
        music.findAll({
            include : [
                {
                    model : composer,
                    required : true,
                    where : {id : id}
                },
                {
                    model : genre,
                    required : true
                }
            ],
            //order : '"hits" DESC'
        }).then(function (initialDAOs){
            var genres = [];
            initialDAOs.forEach(function (initialDAO){
                genres.push(initialDAO.dataValues.genre.dataValues.id);
            },this);
            genres = new Set(genres);
            let genreA = Array.from(genres);
            genre.findAll({
                where : {
                    id : {
                        $in : genreA
                    }
                }
            }).then(function(reqGenres){
                    res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(reqGenres);
            });
            //let genres = Array.from(genreSet);
             
    
           
        });
         
    }
}