'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */

module.exports = function(env){
    if(env == "developement"){
        return {

            developerAccessToken : "a45481357d4f41ffab53fb3b64e33636",
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