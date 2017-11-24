"use strict";
var models=require('../models');

var music=models['music'];


module.exports={
    postMusicId:function postMusicId(req,res){
        var id=req.params.musicId;
        music.find({
            where:{
                id:id
                
            }
            
        }).then(function (initialDAO){
            initialDAO.increment('hits');
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(initialDAO);

        });
         
    }
}