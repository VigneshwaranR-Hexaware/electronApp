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