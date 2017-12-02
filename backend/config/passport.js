// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var JsonStrategy = require('passport-json').Strategy;
// load up the user model
//var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
//var dbconfig = require('./configurations');
//var connection = mysql.createConnection(dbconfig.db);
var models =require("../models");
var Sequelize = require('../tools/db_sequelize.js');
var User=models["user"];



//connection.query('USE ' + dbconfig.db.database);
// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.dataValues.id);
    });

    passport.deserializeUser(function(id, done) {
    User.find({where: {id: id}}).success(function(user){
        done(null, user);
       }).error(function(err){
        done(err, null);
       });
    });
    // used to deserialize the user
    // passport.deserializeUser(function(id, done) {
    //     connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
    //         done(err, rows[0]);
    //     });
    // });
    

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-login',new JsonStrategy({
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback : true
  },
    function(req,username, password, done) {
      User.find({ where: {username:req.body.username }})
      .then(function(user) {
        var value=bcrypt.compareSync(password,user.dataValues.password);
       
     //   console.log(user);
        if (!user) {

          return done(null, false, false);
        } else if (value==false) {
          console.log("wrong password")
         return done(null, true, false);
        } else if(user && value==true) {
          //console.log("user");
          return done(null, user, true);
        }
      }).catch(function(err){
      
        return done(null,false,false);
      });
     // return done(null,true,true);
    }
  ));
  
 passport.use(
        'local-signup',
        new JsonStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            emailField : 'email',
            phoneField : 'phone',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
         function(req, username, password, done) {
            console.log("hello");
            User.find({ where: { username:req.body.username}}).then(function(user) {      
            if(user){done(null,user,false);
              }
            if (!user) {
                  console.log("no rows "+req.body.usertype);
                    var newUserMysql = {
                        username: username,
                        email: req.body.email,
                        phone : req.body.phone,
                        password: bcrypt.hashSync(password, null, null),
                        grades: 1,
                        ranks: 1,  // use the generateHash function in our user model
                    };
                    User.create(newUserMysql);
                    done(null,newUserMysql,true);
            }else{
                 done(null, false, false );
            }  }).catch(function(err){
      done(err);
    });
  }
));
            
      
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'


// Use local strategy to create user account



//     passport.use(new JsonStrategy({
//             // by default, local strategy uses username and password, we will override with email
//             usernameProp : 'username',
//             passwordProp : 'password',
//             //typefield: 'usertype',
//             passReqToCallback : true // allows us to pass back the entire request to the callback
//         },
//         function(req, username, password, done) { // callback with email and password from our form
//             console.log("usertype"+req.body.usertype);
//             connection.query("SELECT * FROM users WHERE BINARY username = ? and usertype =?",[username,req.body.usertype], function(err, rows){
//                 if (err)
//                     return done(err);
//                 if (!rows.length) {
//                     return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
//                 }

//                 // if the user is found but the password is wrong
//                 if (!bcrypt.compareSync(password, rows[0].password))
//                     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

//                 // all is well, return successful user
//                 return done(null, rows[0]);
//             });
//         })
//     );
 };
