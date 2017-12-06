"use strict";
var models=require('../models');

var music=models['music'];


module.exports={
    getMusic:function getMusicModel(req,res){
        
        music.find({
            where:{
                grade:req.params.grade,
                rank:req.params.rank
            }
            
        }).then(function (initialDAO){
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(initialDAO.dataValues);

        });
         
    }
}