
class CardDesign {

    constructor(card, responseType) {

        this.data = card;
        this.responseType = responseType;

        this.html = ['<div class="facebook_card_1">'];
    }


    plotCardOne() {

        var html = `<div class="card">
        <img src="${this.data.imageUrl}" alt="${this.data.title}"height="100" width="100" />    
        <h2 style="font-size: 20px;">${this.data.title}</h2>
            <p>${this.data.subtitle}</p>

            <!--- put your buttons here -->        
        </div>`;

        // if (this.responseType == "card") {
        //     return this.getCardHTML();
        // } else {
        //     return this.getCarouselHTML();
        // }
        num = num + 1;
        divid = "carousel-example-generic" + num
        var html = '<div id=' + divid + ' class="carousel slide" data-ride="carousel"><ol class="carousel-indicators">' +
            '<li data-target="#' + divid + '" data-slide-to="0" class="active"></li>' +
            '<li data-target="#' + divid + '" data-slide-to="1"></li>' +
            '<li data-target="#' + divid + '" data-slide-to="2"></li></ol>' +
            '<div class="carousel-inner">' +
            '<div class="item active">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<div class="thumbnail adjust1">' +
            '<div class="col-md-2 col-sm-2 col-xs-12">' +
            '</div> <div class="col-md-10 col-sm-10 col-xs-12">' +
            '<div class="caption">' +
            '<p class="text-info lead adjust2">I can"t wait to test this out.</p>' +
            '<p><span class="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.</p>' +
            '<blockquote class="adjust2">' +
            '<p>Abhijit Goswami</p>' +
            '<small><cite title="Source Title"><i class="glyphicon glyphicon-globe"></i> www.example1.com</cite></small>' +
            '</blockquote>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div> <div class="item">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<div class="thumbnail adjust1"> <div class="col-md-2 col-sm-2 col-xs-12"> <img class="media-object img-rounded img-responsive" src="http://placehold.it/100"> </div> <div class="col-md-10 col-sm-10 col-xs-12"> <div class="caption"> <p class="text-info lead adjust2">I can not wait to test this out.</p> <p><span class="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.</p> <blockquote class="adjust2"> <p>Abhijit Goswami</p> <small><cite title="Source Title"><i class="glyphicon glyphicon-globe"></i> www.example2.com</cite></small> </blockquote> </div> </div> </div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="item">' +
            '<div class="row">' +
            '<div class="col-xs-12">' +
            '<div class="thumbnail adjust1">' +
            '<div class="col-md-2 col-sm-2 col-xs-12">' +
            '<img class="media-object img-rounded img-responsive" src="http://placehold.it/100">' +
            '</div> <div class="col-md-10 col-sm-10 col-xs-12"> <div class="caption"> <p class="text-info lead adjust2">I can not wait to test this out.</p> <p><span class="glyphicon glyphicon-thumbs-up"></span> This is a testimonial window. Feedback of user can be displayed here.</p> <blockquote class="adjust2"> <p>Abhijit Goswami</p> <small><cite title="Source Title"><i class="glyphicon glyphicon-globe"></i> www.example3.com</cite></small> </blockquote> </div> </div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>  <a class="left carousel-control" href="#' + divid + '" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a> <a class="right carousel-control" href="#' + divid + '" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a>' +
            '</div>';

        return html;
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
                html += `<h2 style="font-size: 20px;">${this.data[i].title}</h2>`;
                if (this.data[i].subtitle != undefined && this.data[i].subtitle != "") {
                    html += `<p>${this.data[i].subtitle}</p>`;
                }
                if (this.data[i].buttons != undefined) {
                    for (var j = 0; j < this.data[i].buttons.length; j++) {
                        html += `<input type="button" value="${this.data[i].buttons[j].text}" onclick="yesornoButtonClick('${this.data[i].buttons[j].postback}')">`
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
                        mulCardHtml += `<img src="${this.data[i].imageUrl}" alt="${this.data[i].title}" height="100" width="100" />`;
                    }
                    mulCardHtml += `<h2 style="font-size: 20px;">${this.data[i].title}</h2>`;
                    if (this.data[i].subtitle != undefined && this.data[i].subtitle != "") {
                        mulCardHtml += `<p>${this.data[i].subtitle}</p>`;
                    }
                    if (this.data[i].buttons != undefined) {
                        for (var j = 0; j < this.data[i].buttons.length; j++) {
                            mulCardHtml += `<input type="button" value="${this.data[i].buttons[j].text}" onclick="yesornoButtonClick('${this.data[i].buttons[j].postback}')">`
                        }
                    }
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
        for (var i in this.data) {
            if (this.data[i].type == 2) {
                var html = `<div class="card">`;
                html += `<h2 style="font-size: 20px;">${this.data[i].title}</h2>`
                if (this.data[i].replies != undefined) {
                    for (var j = 0; j < this.data[i].replies.length; j++) {
                        html += `<p>${this.data[i].replies[j]}</p>`;
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
    // card_1.addTitle(card.title);
    // card_1.addSubTitle(card.subtitle);
    // card_1.addThumbnail(card.imageUrl);

    // return card_1.plotCardOne(card);

    // return "undefined card";
}