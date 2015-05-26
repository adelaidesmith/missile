ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function downDegrees(degrees){
	theTime = degrees *20;
	console.log("theTime", theTime);
setTimeout(function(){ThunderConnector.command('down');},0);
setTimeout(function(){ThunderConnector.command('stop');},theTime);

//setTimeout(function(){ThunderConnector.command('fire');},8200);

}
var degrees = (process.argv[2] || 50);
console.log("degrees",degrees);
downDegrees(degrees);
