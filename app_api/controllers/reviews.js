var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(req, res){
  res.status(status);
  res.json(content);

};

module.exports.reviewsCreate = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.reviewsReadOne = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.reviewsUpdateOne = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.reviewDeleteOne = function(req, res){
  sendJsonResponse(res, 200, {'status' : 'success'});
};
