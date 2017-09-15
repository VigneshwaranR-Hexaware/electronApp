'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */

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

module.exports.card = (data) => {
    debugger;
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
            </div>
            
            <!-- Card media -->
            <div class="pmd-card-media">
                <img src="${data.payload[i].imageUrl}" width="1184" height="666" class="img-responsive">
            </div>
            
            <!-- Card body -->
            <div class="pmd-card-title">
                <h2 class="pmd-card-title-text">${data.payload[i].title}</h2>
                <span class="pmd-card-subtitle-text">${data.payload[i].subtitle}</span>	
            </div>`
            if(data.buttons){
            cardButtons=`<div class="pmd-card-actions">
                <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">share</i></button>
                <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">thumb_up</i></button>
                <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">drafts</i></button>
            </div>`
            }
         html=cardBody+cardButtons+`</div></li>`;
    }
    return html;
}


// module.exports.quickreplies =(data)=>{
//     debugger;   
//     var quickRepliesHtml;
//     console.log(data);
//     for(let i in data.payload){
//         for (var j = 0; j < data.payload[i].payload.facebook.quick_replies.length; j++){
//          <a class="pmd-chip-action">
//         <div class="pmd-chip pmd-chip-no-icon">${data.payload[i].payload.facebook.quick_replies[j].title}</div>
//         </a>

//             //quickRepliesHtml =`<div class="pmd-chip pmd-chip-no-icon">`
             
//                 //quickRepliesHtml +=`<p>}</p>
//                // <a class="pmd-chip-action" href="javascript:void(0);"></a>`
//            //quickRepliesHtml += `</div>`
//          }
//     }
//     return quickRepliesHtml;
// }



// <!--Chips with text and an icon-->
// <div class="pmd-chip pmd-chip-contact"> 
// 	<img src="http://propeller.in/assets/images/avatar-icon-40x40.png" alt="avatar"> Trevor Hensen <a class="pmd-chip-action" href="javascript:void(0);"><i class="material-icons">close</i></a>
// </div>
