'use strict';

var Home = require('../../models/home');
//var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/homes/{homeId}',
    config: {
      description: 'Delete a home',
      // joi validation goes here
      handler: function(request, reply){
        Home.findOne({_id: request.params.homeId, userId: request.auth.credentials._id}, function(err,home){
          if (err){return reply(err).code(400);}
          home.remove(function(){
            return reply(home);
          });
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'homes.destroy'
};
