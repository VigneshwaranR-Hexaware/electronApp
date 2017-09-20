'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */

module.exports = function(env){
    if(env == "developement"){
        return {

            developerAccessToken : "e58329c450cb4896a4ca17454ac06737",
            chatServerURL : "",

            applicationTitle: "VFS Global",
            userTitle : "Me",
            botTitle : "VFS Assistant",
            botAvatar : __dirname + "/avatar/vfslogo.png",
            userAvatar : __dirname + "/avatar/user.png",
            attachmentUploadURL : "",
            storeChat: false,
            maxConversationStorage: 50,
            platform : "facebook"
        };
    }
};