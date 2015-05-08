'use strict';

var Home = require('../../models/home');
//var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/homes/{homeId}',
    config: {
      description: 'Edit a home',
      // joi validation goes here
      handler: function(request, reply){
        Home.findByIdAndUpdate(request.params.homeId, request.payload, function(home){
          return reply(home);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'homes.edit'
};
