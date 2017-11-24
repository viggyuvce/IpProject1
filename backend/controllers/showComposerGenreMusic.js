"use strict";
var models=require('../models');
var composer=models['composer'];
var music=models['music'];
var genre = models['genre'];

module.exports={
    postComposerGenreMusic:function postComposerGenreMusic(req,res){
        var composerId=req.params.composerId;
        var genreId=req.params.genreId;
        music.findAll({
            include : [
                {
                    model : composer,
                    required : true,
                    where : {id : composerId},
                    
                },
                {
                    model : genre,
                    where : {id : genreId},
                    required : true,
                    
                }
            ],
            attributes : ["id","title","description","code","scale","level",
            "youtubeLink"],
            order : "level"
            //order : '"hits" DESC'
        }).then(function (initialDAOs){
            initialDAOs.forEach(function(element){
                delete element.dataValues.composer;
                delete element.dataValues.genre;
            },this);
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(initialDAOs);
    
           
        });
         
    }
}