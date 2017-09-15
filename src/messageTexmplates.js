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
    
        let html = `<li class="list-group-item">
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
                    <span class="pmd-card-subtitle-text">Secondary text</span>
                </div>
            </div>
            
            <!-- Card media -->
            <div class="pmd-card-media">
                <img src="${data.payload[1].imageUrl}" width="1184" height="666" class="img-responsive">
            </div>
            
            <!-- Card body -->
            <div class="pmd-card-title">
                <h2 class="pmd-card-title-text">${data.payload[1].title}</h2>
                <span class="pmd-card-subtitle-text">Secondary text</span>	
            </div>	
            
            <div class="pmd-card-body">${data.payload[1].subtitle}</div>
            
            <!-- Card media actions -->
            <div class="pmd-card-actions">
                <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">share</i></button>
                <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">thumb_up</i></button>
                <button class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary" type="button"><i class="material-icons pmd-sm">drafts</i></button>
            </div>
            
            <!-- Card actions -->
            <div class="pmd-card-actions">
                <button class="btn pmd-btn-flat pmd-ripple-effect btn-primary" type="button">Primary</button>
                <button type="button" class="btn pmd-btn-flat pmd-ripple-effect btn-default">Action</button>
            </div>
        </div>
        </li>`;
    
    
        return html;
    }