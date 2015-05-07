'use strict';

var Home = require('../../models/home');
//var Joi = require('joi');

exports.register = function(server, options, next){
  console.log('you are in the function');
  server.route({
    method: 'POST',
    path: '/homes',
    config: {
      description: 'Create a home',
      // joi validation goes here
      handler: function(request, reply){
        var home = new Home(request.payload);
        home.userId = request.auth.credentials._id;
        home.save(function(){
          reply(home);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'homes.create'
};
