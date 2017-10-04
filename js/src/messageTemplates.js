'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */


define([], function () {

    var methods = {};

    //User Plain Text
    methods.userplaintext = (data) => {

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
    methods.plaintext = (data) => {
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
    methods.card = (data) => {
        let html;
        let cardButtons = "";
        let cardBody;
        for (let i in data.payload) {
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

            if (data.payload[i].imageUrl != "" && data.payload[i].imageUrl != undefined) {
                cardBody += ` <div class="pmd-card-media">
                    <img src="${data.payload[i].imageUrl}" width="1184" height="666" class="img-responsive">
                    </div>`
            }

            cardBody += `<div class="pmd-card-title">
                    <h2 class="pmd-card-title-text">${data.payload[i].title}</h2>
                    <span class="pmd-card-subtitle-text">${data.payload[i].subtitle}</span>	
                </div>`
            if (data.buttons && data.payload[i].type == 1) {
                console.log("Buttons" + data);
                cardButtons = `<div class="pmd-card-actions">`
                for (var j = 0; j < data.payload[i].buttons.length; j++) {
                    cardButtons += ` <button type="button" class="btn btn-primary cardresponsepayload" data-cardpayloadButton = "${data.payload[i].buttons[j].postback}" >${data.payload[i].buttons[j].text}</button>`
                }
                cardButtons += `</div>`
            }
            html = cardBody + cardButtons + `</div></li>`;
        }
        return html;
    }
    // List template
    methods.list = (data) => {
    
        let html='';

        let listBody='';
        for (let i in data.payload) {

           listBody+=`<ul class="list-group pmd-z-depth pmd-list pmd-card-list">`;

           for(let j=0;j<data.payload[i].payload.facebook.attachment.payload.elements.length;j++){
     
         listBody+=`<li class="list-group-item">
    
        <a href="#"  class="listresponsepayload"  data = "${data.payload[i].payload.facebook.attachment.payload.elements[j].hasOwnProperty('buttons')?data.payload[i].payload.facebook.attachment.payload.elements[j].buttons[0].payload:''}" style="display:block;">
        <div class="media-body">
        <div class="col-xs-9">
            <h3 class="list-group-item-heading">${data.payload[i].payload.facebook.attachment.payload.elements[j].title}</h3>
            <span class="list-group-item-text">${data.payload[i].payload.facebook.attachment.payload.elements[j].subtitle}</span>	
            </div>
            <div class="col-xs-3">
            <img src="${data.payload[i].payload.facebook.attachment.payload.elements[j].image_url}" width="100" height="100" class="img-responsive">
            </div>
         </div>
         </a>
         
    </li>`;
         }
         html+=`<p class="mute pull-left" style="padding:10px 5px;"><small>sent at ${data.time}</small></p></ul>`;
        }
        return listBody+html;
    }
    // end of list
    
    //Quick Replies Template
    methods.quickreplies = (data) => {
        var quickRepliesHtml = `<li class="list-group-item">
        <div class="media-left">
            <a href="javascript:void(0);" class="avatar-list-img">
            <img class="img-responsive" src="${data.senderAvatar}">
            </a>
        </div>
        <div class="media-body">
        <h3 class="list-group-item-heading">${data.senderName}</h3>`;

        for (let i in data.payload) {
            if (data.payload[i].platform == "facebook") {
                quickRepliesHtml += `<p>${data.payload[i].payload.facebook.text}</p>`
                for (var j = 0; j < data.payload[i].payload.facebook.quick_replies.length; j++) {
                    quickRepliesHtml += `<button type="button"  class="btn pmd-btn-outline pmd-ripple-effect btn-info QuickreplybtnPayload" data-quickRepliesPayload="${data.payload[i].payload.facebook.quick_replies[j].payload
                        }">${data.payload[i].payload.facebook.quick_replies[j].title}</button>`
                }
            }
        }
        quickRepliesHtml += `<p class="mute"><small>sent at ${data.time}</small></p></div></li>`
        return quickRepliesHtml;
    }

    methods.carousel = (data, uniqueId) => {
        var carousel = `<li class="list-group-item">
        <div id="${uniqueId}" class="carousel slide pmd-card pmd-card-default pmd-z-depth" data-ride="false">
        <!-- Carousel items -->
            <div class="carousel-inner">`;
        var index = 0;
        for (let i in data.payload) {

            if (data.payload[i].type == 1) {
                carousel += `<div class="item ${(index == 0) ? 'active' : ''}">    
                    <div class="row">
                        <div class="col-md-3">
                            <a href="#" class="thumbnail">
                                <img src="${data.payload[i].imageUrl}" alt="Image" style="max-width:100%;">
                            </a>
                            <h3>${data.payload[i].title}<p>
                            <p>${data.payload[i].subtitle}</p>`
                if (data.buttons && data.payload[i].type == 1) {
                    for (var j = 0; j < data.payload[i].buttons.length; j++) {
                        carousel += `<button type="button" class="btn btn-primary btn pmd-btn-outline caroselresponsepayload" data-carouselpayloadButton = "${data.payload[i].buttons[j].postback}" >${data.payload[i].buttons[j].text}</button>`
                    }
                }
                carousel += `</div>
                    </div><!--.row-->
                </div> <!--.item-->`;
                index = 1;
            }
        }

        carousel += ` </div><!--.carousel-inner-->
		<a data-slide="prev" href="#${uniqueId}" class="left carousel-control">‹</a>
		<a data-slide="next" href="#${uniqueId}" class="right carousel-control">›</a>
	  </div><!--.Carousel--></li>`;

        return carousel;
    }

    methods.quickrepliesfromapiai =(data)=>{
        console.log(data);
        var apiquickRepliesHtml =`<li class="list-group-item">`
        // <div class="media-left">
        //     <a href="javascript:void(0);" class="avatar-list-img">
        //     <img class="img-responsive" src="${data.senderAvatar}">
        //     </a>
        // </div>
        // <div class="media-body">
        // <h3 class="list-group-item-heading">${data.senderName}</h3>`;
        
        for(let i in data.payload){
            if(data.payload[i].platform =="facebook" && data.payload[i].type == "2"){
                apiquickRepliesHtml +=`<p>${data.payload[i].title}</p>`
                apiquickRepliesHtml +=`<button type="button"  class="btn pmd-btn-outline pmd-ripple-effect btn-info .pmd-btn-fab apiQuickreplybtnPayload" data-apiquickRepliesPayload="${data.payload[5].replies[0]}">${data.payload[5].replies[0]}</button>`
            }
        }
        apiquickRepliesHtml +=`<p class="mute"><small>sent at ${data.time}</small></p></div></li>`
        return apiquickRepliesHtml;
    }

    methods.image = (data) => {
        console.log(data.imageUrl)
            let imagehtml = `<li class="list-group-item">
                <div class="media-left pull-right">
                    <a href="javascript:void(0);" class="avatar-list-img">
                    <img class="img-responsive" src="${data.senderAvatar}">
                    </a>
                </div>
                <div class="media-body">
                    <h3 class="list-group-item-heading">${data.senderName}</h3>
                    <div class="pmd-card pmd-card-default pmd-z-depth">
                    <div class="pmd-card-media">
                        <img width="1184" height="666" class="img-responsive" src="${data.imgUrl}">
                    </div>
                    </div>
                    <p class="mute"><small>sent at ${data.time}</small></p>
                </div>
            </li>`;
            return imagehtml;
        }


    return methods;
});
