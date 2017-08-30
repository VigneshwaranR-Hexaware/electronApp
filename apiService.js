
//module.exports = function apiClass () {

var apiai = require('apiai');
var app =  apiai("Bearer 2236694c3ac943ce93d21afe990b841d");
queryProcess("hi");
function queryProcess(query){
  var request = app.textRequest('<Your text query>', {
    sessionId: '<unique session id>'
});
 
request.on('response', function(response) {
    result=response.result.fulfillment.speech;
    console.log(result);
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
}








