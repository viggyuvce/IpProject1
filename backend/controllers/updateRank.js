"use strict";
var models=require('../models');

var music=models['music'];


module.exports={
    updateRank:function (req,res){
        
        music.find({
            where:{
                id: req.params.id
            }
            
        }).then(function (initialDAO){
            initialDAO.update({
                rank: req.params.rank,
                grade : req.params.grade
            });
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
            res.json(initialDAO.dataValues);

        });
         
    }
}