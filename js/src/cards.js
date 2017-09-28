'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */


define(['messageTemplates', 'uuid'], function (messageTpl, uuidv1) {

    class CardDesign {

        constructor(card, responseType) {
            this.data = card;
            this.responseType = responseType;
        }

        getHTML() {

            if (this.responseType == "plaintext") {
                console.log(this.data);
                return messageTpl.plaintext(this.data);
            }

            if (this.responseType == "card") {
                console.log(JSON.stringify(this.data));
                return messageTpl.card(this.data);
            }

            if (this.responseType == "carousel") {
                return messageTpl.carousel(this.data, uuidv1());
            }

            if (this.responseType == "quickreplies") {
                return messageTpl.quickreplies(this.data);
            }

            // airlines intergration of Airline boarding pass template
            if (this.responseType == "airlineBoarding") {
                return messageTpl.airlineBoarding(this.data);
            }
             // airlines intergration of Airline boarding pass with view bar code template
            if (this.responseType == "ViewBoardingPassBarCode") {
                return messageTpl.ViewBoardingPassBarCode(this.data);
            }
            // airlines intergration of Airline Checkin template
            if (this.responseType == "airlineCheckin") {
                return messageTpl.airlineCheckin(this.data);
            }
            // airlines intergration of Airline Flight Update template
            if (this.responseType == "airlineFlightUpdate") {
                return messageTpl.airlineFlightUpdate(this.data);
            }
            // --------------------------------
        }
    }

    return function (card, responseType) {
        return new CardDesign(card, responseType).getHTML();
    }
});