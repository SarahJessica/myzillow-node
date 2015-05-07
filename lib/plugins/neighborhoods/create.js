'use strict';

var Neighborhood = require('../../models/neighborhood');
//var Joi = require('joi');

exports.register = function(server, options, next){
  console.log('you are in the function');
  server.route({
    method: 'POST',
    path: '/neighborhoods',
    config: {
      description: 'Create a neighborhood',
      // joi validation goes here
      handler: function(request, reply){
        var neighborhood = new Neighborhood(request.payload);
        neighborhood.userId = request.auth.credentials._id;
        neighborhood.save(function(){
          reply(neighborhood);
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'neighborhoods.create'
};
