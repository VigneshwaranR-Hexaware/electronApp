
var cards = require("./cards");

module.exports = function apiClass () {
    this.ApiRequest = function (userSays) 
    {
    var apiai = require('apiai');
    //var app =  apiai("a45481357d4f41ffab53fb3b64e33636");
    var app =  apiai("0bd2ed7b44db4673b5fe19c7e70c8d0c");
    var request = app.textRequest(userSays, {
    sessionId: '0111'
    });

    request.on('response', function(response) {
        console.log(response);     
       insertChat("you", response.result.fulfillment.speech); 
       var isCardorCarousel=false; 
       var isImage=false; 
        var isQuickReply=false; 
        //To find Card || Carousel
        var count=0;
        for(var i in response.result.fulfillment.messages){
            console.log(i);
            if(response.result.fulfillment.messages[i].type == 1){
                count=count+1;  
                isCardorCarousel=true;           
            }
            if(response.result.fulfillment.messages[i].type == 3){
                isImage=true;         
            }
            if(response.result.fulfillment.messages[i].type == 2){
                isQuickReply=true;         
            }
        }
        if(isCardorCarousel){
        if(count==1)
        {                                
           let cardHTML = cards(response.result.fulfillment.messages,"card");
           insertChat("you", cardHTML);                       
        }else
        {                                 
            let cardHTML = cards(response.result.fulfillment.messages,"carousel");
            insertChat("you", cardHTML);                       
        }
    }
    if(isImage) 
    {
        let cardHTML = cards(response.result.fulfillment.messages,"image");
        insertChat("you", cardHTML);   
    }
     if(isQuickReply) 
    {
        let cardHTML = cards(response.result.fulfillment.messages,"quickreply");
        insertChat("you", cardHTML);   
    }

    });

    request.on('error', function(error) {
    console.log(error);
    });
    request.end();
}}









