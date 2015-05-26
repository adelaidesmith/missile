//moverightdegrees.js
ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function moveRightDegrees(degrees){
	theTime = degrees *50;
	console.log("theTime", theTime);
setTimeout(function(){ThunderConnector.command('right');},0);
setTimeout(function(){ThunderConnector.command('stop');},theTime);

//setTimeout(function(){ThunderConnector.command('fire');},8200);

}
var degrees = (process.argv[2] || 5);
console.log("degrees",degrees);
moveRightDegrees(degrees);
