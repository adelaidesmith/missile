ThunderConnector = require('thunder-connector');
ThunderConnector.connect();

var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events


exports.up = function up(degrees){
  degrees = degrees || .5;
	stopTime = Math.floor(degrees * 22.3);
  console.log("degrees", degrees, "stopTime", stopTime);
	setTimeout(function(){ThunderConnector.command('up');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

exports.down = function down(degrees){
  degrees = degrees || .5;
	stopTime = Math.floor(degrees * 22.3);
  console.log("degrees", degrees, "stopTime", stopTime);
	setTimeout(function(){ThunderConnector.command('down');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

exports.turnRightDegrees = function turnRightDegrees(degrees){
  degrees = degrees || .5;
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('right');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

exports.turnLeftDegrees = function turnLeftDegrees(degrees){
  degrees = degrees || .5;
	stopTime = Math.floor(degrees * 22.3)
	setTimeout(function(){ThunderConnector.command('left');},0);
	setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

exports.fire = function fire(){
	setTimeout(function(){ThunderConnector.command('fire');},0);
}

keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);

  if (key.name == 'w'){
  	console.log("moved up");
  	exports.up();
  } else if (key.name == 's'){
  	console.log("moved down");
  	exports.down();
  } else if (key.name == 'd'){
  	console.log("moved right");
  	exports.turnRightDegrees();
  } else if (key.name == 'a'){
  	console.log("moved left");
  	exports.turnLeftDegrees();
  } else if (key.name == 'space'){
  	console.log("fired");
  	exports.fire();
  }


  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();
