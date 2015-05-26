ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function upDegrees(degrees){
	theTime = degrees *20;
	console.log("theTime", theTime);
setTimeout(function(){ThunderConnector.command('up');},0);
setTimeout(function(){ThunderConnector.command('stop');},theTime);

//setTimeout(function(){ThunderConnector.command('fire');},8200);

}
var degrees = (process.argv[2] || 45);
console.log("degrees",degrees);
upDegrees(degrees);
