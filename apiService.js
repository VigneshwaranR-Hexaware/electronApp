module.exports = function apiClass () {
    this.ApiRequest = function (userSays) 
    {
    var apiai = require('apiai');
    var app =  apiai("84a42b482cf74b9c9914495c757de603");
    var request = app.textRequest(userSays, {
    sessionId: '0111'
    });

    request.on('response', function(response) {
        result=response.result.fulfillment.speech;
        insertChat("you", result);  
    });

    request.on('error', function(error) {
    console.log(error);
    });
    request.end();
}}









