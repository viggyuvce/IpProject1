"use strict";
var models=require('../models');
var composer=models['composer'];
var music=models['music'];
var genre = models['genre'];

module.exports={
    postComposerId:function postComposerId(req,res){
        var id=req.params.composerId;
        composer.find({
            where:{
                id:id
                
            },
            include : [music],
            order : '"hits" DESC',
            limit : 10
        }).then(function (initialDAO){
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(initialDAO);

        });
         
    }
}