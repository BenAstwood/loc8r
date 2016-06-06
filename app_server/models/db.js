var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';
if(process.env.NODE_ENV === 'production'){
  dbURI = 'mongodb://heroku_bzdr1952:vr620n7mnnj922aa9gpk4vg1c@ds017672.mlab.com:17672/heroku_bzdr1952';
}
mongoose.connect(dbURI);

// readline for windows
var readLine = require("readline");
if(process.platform === "win32"){
  var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on("SIGINT", function(){
    process.emit("SIGINT");
  });
}


// logs for monitoring connection events
mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err){
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
});

//Event listeners & functions for shutdown
var gracefulShutdown = function(msg, callback){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function(){
  gracefulShutdown('nodemon restart', function(){
  process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function(){
  gracefulShutdown('app termination', function(){
    process.exit(0);
  });
});

process.on('SIGTERM', function(){
  gracefulShutdown('Heroku app shutdown', function(){
    process.exit(0);
  });
});

//mongoose schema
require('./locations');
