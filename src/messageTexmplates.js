'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */

//User Plain Text
module.exports.userplaintext = (data) => {

    let html = `<li class="list-group-item chat-user-dialog">
        <div class="media-left pull-right">
            <a href="javascript:void(0);" class="avatar-list-img">
            <img class="img-responsive" src="${data.senderAvatar}">
            </a>
        </div>
        <div class="media-body">
            <h3 class="list-group-item-heading">${data.senderName}</h3>
            <span class="list-group-item-text">${data.payload}</span>	
            <p class="mute"><small>sent at ${data.time}</small></p>
        </div>
    </li>`;

    return html;
}

//Plain Text Template
module.exports.plaintext = (data) => {
    let html = `<li class="list-group-item">
        <div class="media-left">
            <a href="javascript:void(0);" class="avatar-list-img">
            <img class="img-responsive" src="${data.senderAvatar}">
            </a>
        </div>
        <div class="media-body">
            <h3 class="list-group-item-heading">${data.senderName}</h3>
            <span class="list-group-item-text">${data.payload}</span>	
            <p class="mute"><small>sent at ${data.time}</small></p>
        </div>
    </li>`;

    return html;
}
//Card Template
module.exports.card = (data) => {
    let html;
    let cardButtons= "";
    let cardBody;
    for(let i in data.payload){
     cardBody = `<li class="list-group-item">
        <div class="pmd-card pmd-card-default pmd-z-depth">
            <!-- Card header -->
            <div class="pmd-card-title">
                <div class="media-left">
                    <a class="avatar-list-img" href="javascript:void(0);">
                        <img src="${data.senderAvatar}" class="img-responsive">
                    </a>
                </div>
                <div class="media-body media-middle">
                    <h3 class="pmd-card-title-text">${data.senderName}</h3>
                </div>
            </div>`
            
            <!-- Card media -->
            if(data.payload[i].imageUrl != "" && data.payload[i].imageUrl != undefined){ 
                cardBody +=` <div class="pmd-card-media">
                <img src="${data.payload[i].imageUrl}" width="1184" height="666" class="img-responsive">
                </div>`
            }
            
            <!-- Card body -->
            cardBody += `<div class="pmd-card-title">
                <h2 class="pmd-card-title-text">${data.payload[i].title}</h2>
                <span class="pmd-card-subtitle-text">${data.payload[i].subtitle}</span>	
            </div>`
            if(data.buttons && data.payload[i].type == 1){
                console.log("Buttons"+data);
                cardButtons=`<div class="pmd-card-actions">`
                for(var j=0 ; j < data.payload[i].buttons.length; j++ ){
                    cardButtons +=` <button type="button" class="btn btn-primary cardresponsepayload" data-cardpayloadButton = "${data.payload[i].buttons[j].postback}" >${data.payload[i].buttons[j].text}</button>`
                }
                cardButtons+=`</div>`
            }
         html=cardBody+cardButtons+`</div></li>`;
    }
    return html;
}

//Quick Replies Template
module.exports.quickreplies =(data)=>{
    var quickRepliesHtml =`<li class="list-group-item">
    <div class="media-left">
        <a href="javascript:void(0);" class="avatar-list-img">
        <img class="img-responsive" src="${data.senderAvatar}">
        </a>
    </div>
    <div class="media-body">
    <h3 class="list-group-item-heading">${data.senderName}</h3>`;
    
    for(let i in data.payload){
        if(data.payload[i].platform =="facebook"){
        quickRepliesHtml +=`<p>${data.payload[i].payload.facebook.text}</p>`
        for (var j = 0; j < data.payload[i].payload.facebook.quick_replies.length; j++){
            quickRepliesHtml +=`<button type="button"  class="btn pmd-btn-outline pmd-ripple-effect btn-info QuickreplybtnPayload" data-quickRepliesPayload="${data.payload[i].payload.facebook.quick_replies[j].payload
            }">${data.payload[i].payload.facebook.quick_replies[j].title}</button>`
         }
        }
        }
    quickRepliesHtml +=`<p class="mute"><small>sent at ${data.time}</small></p></div></li>`
    return quickRepliesHtml;
}

module.exports.carousel =(data)=>{
    var carousel =`<li class="list-group-item">
    <div class="carousel slide" data-ride="false">
    <!-- Carousel items -->
        <div class="carousel-inner">`;
        for(let i in data.payload){
            carousel +=`<div class="item ${(i == 0) ? 'active': '' }">
            <div class="row">
              <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;"></a></div>
            </div><!--.row-->
        </div><!--.item-->`;
        }
        carousel +=` </div><!--.carousel-inner-->
        <a data-slide="prev" href="#Carousel" class="left carousel-control">‹</a>
        <a data-slide="next" href="#Carousel" class="right carousel-control">›</a>
      </div><!--.Carousel--></li>`;
return carousel;
}

