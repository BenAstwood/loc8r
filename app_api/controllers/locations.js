var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(req, res){
  res.status(status);
  res.json(content);

};

module.exports.locationsCreate = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsReadOne = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsDeleteOne = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsUpdateOne = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};
