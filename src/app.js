'use strict';

/* -------------------------------------------------------------------
Copyright (c) 2017-2017 Hexaware Technologies
This file is part of the Innovation LAB - Offline Bot.
------------------------------------------------------------------- */

$(function() {

    var environment = process.env.environment || "developement";
    var config = require("./appConfig")(environment);
    var utils = require("./src/utils");
    if(config.developerAccessToken){

        var processor = require('./src/apiAIService')(config);
    }

    if(config.chatServerURL){
        var processor = require('./src/charServerService')(config);
    }

    if(!processor){
        throw new Error("Message processing manager is not defined!");
    }

    var msg_container = $("ul#msg_container");
    if(msg_container.find('li').length == 0){
       msg_container.siblings("h1").removeClass('hidden');
    } 
    else {
       msg_container.siblings("h1").addClass('hidden');
       msg_container.removeClass('hidden');
    }
    //Chatbox Send message
    $("#btn-input").keypress(function (e) {
        if(e.which == 13) {
            var text = $(this).val();
            if (text !== "") {
                $(this).val('');
                //Calling ApiaiService call
                processor.askBot(text, function(error, html){
                    if(error){
                        alert(error); //change into some inline fancy display, show error in chat window.
                    }
                    if(html){
                        if(msg_container.hasClass('hidden')){ // can be optimimzed and removed from here
                            msg_container.siblings("h1").addClass('hidden');
                            msg_container.removeClass('hidden');
                        }
                        //Binding response HTML to chat window
                        msg_container.append(html);
                        utils.scrollSmoothToBottom($('div.chat-body'));
                        console.log(html);
                    }
                });
                e.preventDefault();
            }
        }
    });

//Quick Replies payload button Click
 $(document).on('click','.QuickreplybtnPayload',function(e){
    var payloadInput= $(this).data().quickrepliespayload;
    processor.askBot(payloadInput, function(error, html){
                if(error){
                    Console.log("error occured while processing your Request") //change into some inline fancy display, show error in chat window.
                }
                if(html){
                    msg_container.append(html);
                    
                }
            });
            e.preventDefault();
 })

function quickRepliesPayload(input){
    alert(input);
    alert("I am Triggered");
    quickRepliesPayload
}
const remote = require('electron').remote;
 $(document).on('click','#btnMinimize',function(e){
 var window = remote.getCurrentWindow();
    window.minimize();  
 })

 $(document).on('click','#btnClose',function(e){
  var window = remote.getCurrentWindow();
   if (confirm('Are you sure want to exit')) { 
       window.close(); 
    }
 })

  

});



// $("#btn-input").on("keyup", function (e) {
//     if (e.which == 13) {
//         var text = $(this).val();
//         if (text !== "") {
//             // insertChat("me", text);
//             // $(this).val('');
//             // var apiClass = require('./src/apiService');
//             // var app = new apiClass()
//             // var resp = app.ApiRequest(text);
//             //$(".msg_container_base").stop().animate({ scrollTop: $(".msg_container_base")[0].scrollHeight}, 1000);
            
//         }
//     }
// });


// var divid = "";
// var num = 0;
// $(document).on('click', '.panel-heading span.icon_minim', function (e) {
//     var $this = $(this);
//     if (!$this.hasClass('panel-collapsed')) {
//         $this.parents('.panel').find('.panel-body').slideUp();
//         $this.addClass('panel-collapsed');
//         $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
//     } else {
//         $this.parents('.panel').find('.panel-body').slideDown();
//         $this.removeClass('panel-collapsed');
//         $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
//     }

// });

// $(document).on('focus', '.panel-footer input.chat_input', function (e) {
//     var $this = $(this);
//     if ($('#minim_chat_window').hasClass('panel-collapsed')) {
//         $this.parents('.panel').find('.panel-body').slideDown();
//         $('#minim_chat_window').removeClass('panel-collapsed');
//         $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
//     }

// });

// $(document).on('click', '#new_chat', function (e) {
//     var size = $(".chat-window:last-child").css("margin-left");
//     size_total = parseInt(size) + 400;
//     alert(size_total);
//     var clone = $("#chat_window_1").clone().appendTo(".container");
//     clone.css("margin-left", size_total);
// });

// $(document).on('click', '.icon_close', function (e) {
//     //$(this).parent().parent().parent().parent().remove();
//     $("#chat_window_1").remove();
// });

// $(document).on('click', '.panel-heading span.icon_minim', function (e) {
//     var $this = $(this);
//     if (!$this.hasClass('panel-collapsed')) {
//         $this.parents('.panel').find('.panel-body').slideUp();
//         $this.addClass('panel-collapsed');
//         $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
//     } else {
//         $this.parents('.panel').find('.panel-body').slideDown();
//         $this.removeClass('panel-collapsed');
//         $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
//     }

// });

// $(document).on('focus', '.panel-footer input.chat_input', function (e) {
//     var $this = $(this);
//     if ($('#minim_chat_window').hasClass('panel-collapsed')) {
//         $this.parents('.panel').find('.panel-body').slideDown();
//         $('#minim_chat_window').removeClass('panel-collapsed');
//         $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
//     }

// });

// $(document).on('click', '#new_chat', function (e) {
//     var size = $(".chat-window:last-child").css("margin-left");
//     size_total = parseInt(size) + 400;
//     alert(size_total);
//     var clone = $("#chat_window_1").clone().appendTo(".container");
//     clone.css("margin-left", size_total);
// });

// $(document).on('click', '.icon_close', function (e) {
//     //$(this).parent().parent().parent().parent().remove();
//     $("#chat_window_1").remove();
// });

// // var result="";
// var me = {};
// me.avatar = "http://www.vfsglobal.com/russian/images/Disclaimer/header.png";
// var you = {};
// you.avatar = "http://www.curiosityme.com/wp-content/uploads/2015/08/VFS-Logo-700x400.jpg";
// $(function () {
//     var test;
//     $("#btn-input").on("keyup", function (e) {
//         if (e.which == 13) {
//             var text = $(this).val();
//             if (text !== "") {
//                 insertChat("me", text);
//                 $(this).val('');
//                 var apiClass = require('./src/apiService');
//                 var app = new apiClass()
//                 var resp = app.ApiRequest(text);
//                 //$(".msg_container_base").stop().animate({ scrollTop: $(".msg_container_base")[0].scrollHeight}, 1000);
                
//             }
//         }
//     });
//     //-- Clear Chat
//     resetChat();
// });



// function insertChat(who, text, time = 0) {
//     var control = "";
//     var date = formatAMPM(new Date());
//     if (text != "") {
//         if (who == "me") {
//             control = '<div class="row msg_container base_sent">' +
//                 '<div class="col-md-10 col-xs-10">' +
//                 '<div class="messages msg_sent" style="margin-left:3px;">' +
//                 '<p>' + text + '</p>' +
//                 '<p><small>' + date + '</small></p>' +
//                 '</div>' +
//                 '</div>' +
//                 '<div class="col-md-2 col-xs-2 avatar">' +
//                 '<img style="width:30px" src="' + me.avatar + '" class=" img-responsive ">' +
//                 '</div>' +
//                 '</div>';
//         }
//         else {
//             control = '<div class="row msg_container base_receive">' +
//                 '<div class="col-md-2 col-xs-2 avatar">' +
//                 '<img src="' + you.avatar + '" style="width:40px" class=" img-responsive ">' +
//                 '</div>' +
//                 '<div class="col-md-10 col-xs-10">' +
//                 '<div class="messages msg_receive">' +
//                 '<p>' + text + '</p>' +
//                 '<p><small>' + date + '</small></p>' +
//                 '</div>' +
//                 '</div>' +
//                 '</div>';
//         }
//     }
//     setTimeout(
//         function () {
//             //$("ul").append(control);
//             $("#msg_container").append(control);
//         }, time);
// }
// function resetChat() {
//     $("#msg_container").empty();
// }

// function yesornoButtonClick(text) {   
//     insertChat("me", text);
//     var apiClass = require('./src/apiService');
//     var app = new apiClass();
//     var resp = app.ApiRequest(text);
//     $(".msg_container_base").stop().animate({ scrollTop: $(".msg_container_base")[0].scrollHeight}, 1000);
// }
// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;

// } 