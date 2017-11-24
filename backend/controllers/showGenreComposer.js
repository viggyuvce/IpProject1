"use strict";
var models=require('../models');
var composer=models['composer'];
var music=models['music'];
var genre = models['genre'];

module.exports={
    postGenreComposer:function postGenreComposer(req,res){
        var id=req.params.genreId;
        music.findAll({
            include : [
                {
                    model : composer,
                    required : true,
                    
                },
                {
                    model : genre,
                    where : {id : id},
                    required : true
                }
            ],
            
            //order : '"hits" DESC'
        }).then(function (initialDAOs){
            var composers = [];
            //console.log(composerSet);
            initialDAOs.forEach(function (initialDAO){
                composers.push(initialDAO.dataValues.composer.dataValues.id);
            },this);
            composers = new Set(composers);
            console.log(composers);
            let composerA = Array.from(composers);
            composer.findAll({
                where : {
                    id : {
                        $in : composerA
                    }
                }
            }).then(function(reqComposers){
                 res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(reqComposers);
            });
            //console.log(composerSet);
           
            
           
        });
         
    }
}