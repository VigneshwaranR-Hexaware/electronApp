'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */

module.exports.currentTime = function() {

    var currentDate = new Date();
    var hours = (currentDate.getHours() < 10) ? '0' + currentDate.getHours() : currentDate.getHours();
    var minutes = (currentDate.getMinutes() < 10) ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';

    return `${hours}:${minutes} ${ampm}`;
};

module.exports.scrollSmoothToBottom = (element) => {
    element.stop().animate({
    scrollTop: element.offset().top
    }, 500);
};