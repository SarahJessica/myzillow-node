'use strict';

var Neighborhood = require('../../models/neighborhood');
//var Joi = require('joi');

exports.register = function(server, options, next){
  console.log('you are in the function');
  server.route({
    method: 'GET',
    path: '/neighborhoods',
    config: {
      description: 'Get all the neighborhoods',
      // joi validation goes here
      handler: function(request, reply){
        Neighborhood.find( function(err, hoods){
          return reply ({neighborhoods: hoods});
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'neighborhoods.index'
};
