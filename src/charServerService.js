'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */

module.exports = (config) => {

    var cards = require("./cards");

    class WebhookHandler{

        constructor(webhookURL){
            this.webhookURL = webhookURL;
        }

        send(text){
            // your request code goes here
            console.log(text);
        }
    }

    return new WebhookHandler(config.chatServerURL);
};