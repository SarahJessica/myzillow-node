'use strict';

var Home = require('../../models/home');
//var Joi = require('joi');

exports.register = function(server, options, next){
  console.log('you are in the function');
  server.route({
    method: 'GET',
    path: '/homes',
    config: {
      description: 'Get all the homes',
      // joi validation goes here
      handler: function(request, reply){
        Home.find( function(err, homes){
          return reply ({homes: homes});
        });
      }
    }
  });
  return next();
};

exports.register.attributes = {
  name: 'homes.index'
};
