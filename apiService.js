module.exports = function apiClass () {
this.ApiRequest = function (userSays) 
{
var apiai = require('apiai');
var app =  apiai("2236694c3ac943ce93d21afe990b841d");
var request = app.textRequest(userSays, {
sessionId: '0111'
});

request.on('response', function(response) {
    result=response.result.fulfillment.speech;
});

request.on('error', function(error) {
console.log(error);
});
request.end();



}}





// module.exports = function apiClass () {

// var apiai = require('apiai');
// var app =  apiai("Bearer 2236694c3ac943ce93d21afe990b841d");

// function queryProcess(query){
//   var request = app.textRequest('query', {
//     sessionId: '<unique session id>'
// });
 
// request.on('response', function(response) {
//     result=response.result.fulfillment.speech;
//     console.log(result);
//     console.log(response);
// });
 
// request.on('error', function(error) {
//     console.log(error);
// });
// }
// }








