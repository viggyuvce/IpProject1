var models=require('../models');
var user=models['user'];

module.exports ={
    getCompletedGrades : function getCompletedGrades(req,res){
        user.find({where : { id : req.params.id}})
                        .then(function (DAO){
            res.header('Access-Control-Allow-Origin','*');
		    res.header('Content-Type','application/json');
		    return res.json(DAO.dataValues.grades);
        });

    }
}