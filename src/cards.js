
class CardDesign {
    constructor(card, responseType) {
        this.data = card;
        this.responseType = responseType;
        this.html = ['<div class="facebook_card_1">'];
    }   
    addTitle(title) {
        this.title = title;
        this.html.push(`<h3>${title}</h3>`);
    }
    addSubTitle(subtitle) {
        this.html.push(`<p>${subtitle}</p>`);
    }

    addThumbnail(imageUrl) {
        this.html.push(`<img alt="${this.title}" src="${imageUrl}" />`);
    }

    addButton() {
    }

    getHTML() {
        this.html.push('</div>');
        return this.html.join("");
    }
    getHTMLNew() {
        if (this.responseType == "card") {
            return this.getCardHTML();
        }
        else if (this.responseType == "carousel") {
            return this.getCarouselHTML();
        }
        else if (this.responseType == "image") {
            return this.getImageHTML();
        }
        else if (this.responseType == "quickreply") {
            return this.getQuickReplyHTML();
        }
         else if (this.responseType == "quickreplyfromapiai") {
            return this.getQuickReplyHTMLFromApiai();
        }
        else {
            return "custom payload";
        }
    }
    getCardHTML() {
        // var title=this.data.title;
        for (var i in this.data) {
            if (this.data[i].type == 1) {
                var html = `<div class="card">`;
                if (this.data[i].imageUrl != undefined && this.data[i].imageUrl != "") {
                    html += `<img src="${this.data[i].imageUrl}" alt="${this.data[i].title}" height="100" width="100" />`;
                }
                html += `<h2 style="font-size: 12px; margin-left: 7px;"><b>${this.data[i].title}</b></h2>`;
                if (this.data[i].subtitle != undefined && this.data[i].subtitle != "") {
                    html += `<p style="font-size: 11px; margin-left: 10px;">${this.data[i].subtitle}</p>`;
                }
                if (this.data[i].buttons != undefined) {
                    for (var j = 0; j < this.data[i].buttons.length; j++) {
                        html += `<input type="button" style="margin-left: 5px;" value="${this.data[i].buttons[j].text}" onclick="yesornoButtonClick('${this.data[i].buttons[j].postback}')">`
                    }
                }
                html += `</div>`;
                return html;
            }
        }
    }
    getCarouselHTML() {
        num = num + 1;
        var html = `<div class="card">`;
        divid = "carousel-example-generic" + num;
        var listHtml = "";
        var mulCardHtml = "";
        var loopCount = 0
        for (var i in this.data) {
            if (this.data[i].type == 1) {
                if (i == 0) {
                    listHtml += `<li data-target="#${divid}" data-slide-to="${i}" class="active"></li>`;
                } else {
                    listHtml += `<li data-target="#${divid}" data-slide-to="${i}"></li>`;
                }
                //starts with card
                if (this.data[i].type == 1) {
                    if (loopCount == 0) {
                        mulCardHtml += `<div class="item active"><div class="row">`;
                    } else {
                        mulCardHtml += `<div class="item"><div class="row">`;
                    }
                    if (this.data[i].imageUrl != undefined && this.data[i].imageUrl != "") {
                        mulCardHtml += `<img src="${this.data[i].imageUrl}" alt="${this.data[i].title}" height="100" width="70" />`;
                    }
                    mulCardHtml += `<h2 style="font-size: 12px;margin-left: 17px;"><b>${this.data[i].title}</b></h2>`;
                    if (this.data[i].subtitle != undefined && this.data[i].subtitle != "") {
                        mulCardHtml += `<p style="font-size: 12px;margin-left: 20px;">${this.data[i].subtitle}</p>`;
                    }
                    if (this.data[i].buttons != undefined) {
                        for (var j = 0; j < this.data[i].buttons.length; j++) {
                            if(j==0){
                            mulCardHtml += `<input type="button" style="margin-left: 20px;" value="${this.data[i].buttons[j].text}" onclick="yesornoButtonClick('${this.data[i].buttons[j].postback}')">`
                        }else
                        {
                             mulCardHtml += `<input type="button" style="margin-left: 7px;" value="${this.data[i].buttons[j].text}" onclick="yesornoButtonClick('${this.data[i].buttons[j].postback}')">`
                        }
                    }}
                    mulCardHtml += `</div></div>`;
                }
                loopCount = loopCount + 1;
                //end
            }
        }
        html += `<div id="${divid}" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators">`;
        html += listHtml + `</ol>`;
        html += `<div class="carousel-inner">`
        html += mulCardHtml;
        html += `</div>`; //end with carousel-inner
        html+=`<a class="left carousel-control" href="#${divid}" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a> <a class="right carousel-control" href="#${divid}" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>`;

        return html;
    }

    getImageHTML() {
        for (var i in this.data) {
            if (this.data[i].type == 3) {
                var html = `<div class="card">
        <img src="${this.data[i].imageUrl}" "height="100" width="100" />                  
        </div>`;
                return html;
            }
        }
    }
    getQuickReplyHTML() {
        var html = `<div>`;
        for (var i in this.data) {
            if (this.data[i].type == 4) {
                if(this.data[i].payload.facebook.quick_replies.length >0 ){
                        html += `<p>${this.data[i].payload.facebook.text}</p>`
                        for (var j = 0; j < this.data[i].payload.facebook.quick_replies.length; j++) {
                        html+= `<input type="button" value="${this.data[i].payload.facebook.quick_replies[j].title}" onclick="yesornoButtonClick('${this.data[i].payload.facebook.quick_replies[j].payload}')" style="margin:1px 2px 2px 1px;">`
                        } 
                }
                html += `</div>`;
                return html;
            }
        }
    }
    getQuickReplyHTMLFromApiai() {
        for (var i in this.data) {
            if (this.data[i].type == 2) {
                var html = `<div>`;
                html += `<h2 style="font-size: 20px;margin-left:5px;">${this.data[i].title}</h2>`
                if (this.data[i].replies != undefined) {
                    for (var j = 0; j < this.data[i].replies.length; j++) {
                        html += `<p style="margin-left:8px;">${this.data[i].replies[j]}</p>`;
                    }
                }
                html += `</div>`;
                return html;
            }
        }
    }
}

module.exports = function (card, responseType) {
    return new CardDesign(card, responseType).getHTMLNew();
}