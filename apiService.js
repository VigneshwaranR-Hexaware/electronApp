
var cards = require("./cards");

module.exports = function apiClass () {
    this.ApiRequest = function (userSays) 
    {
    var apiai = require('apiai');
    var app =  apiai("a45481357d4f41ffab53fb3b64e33636");
    var request = app.textRequest(userSays, {
    sessionId: '0111'
    });

    request.on('response', function(response) {
        console.log(response);

        insertChat("you", response.result.fulfillment.speech);  

        for(var i in response.result.fulfillment.messages){
            console.log(i);
            if(response.result.fulfillment.messages[i].type > 0){
                let cardHTML = cards(response.result.fulfillment.messages[i]);
                insertChat("you", cardHTML);
            }
        }

    });

    request.on('error', function(error) {
    console.log(error);
    });
    request.end();
}}









