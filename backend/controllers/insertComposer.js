var models=require('../models');
var composer=models['composer'];


module.exports ={
     insertComposer : function insertComposer(req,res){
       var composerData = {
             composerName: req.body.composerName,
            description: req.body.description,
        };
      composer.create(composerData)
                            .then(function(DAO){
                                var id = DAO.dataValues.id;
                                res.json({"lastInserted":id,"success":true});
                            })
                            .catch(function(err){
                                res.json({"success":false});
                            });
    }
}

