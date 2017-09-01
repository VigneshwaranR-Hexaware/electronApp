
class CardDesign {

    constructor (card){

        this.data = card;

        this.html = ['<div class="facebook_card_1">'];
    }

    plotCardOne(){

        var html = `<div class="card">
        <img src="${this.data.imageUrl}" alt="${this.data.title}"height="100" width="100" />    
        <h2 style="font-size: 20px;">${this.data.title}</h2>
            <p>${this.data.subtitle}</p>
            
            <!--- put your buttons here -->        
        </div>`;

        return html;
    }

    addTitle(title){
        this.title = title;
        this.html.push(`<h3>${title}</h3>`);
    }
            
    addSubTitle(subtitle){
        this.html.push(`<p>${subtitle}</p>`);
    }

    addThumbnail(imageUrl){
        this.html.push(`<img alt="${this.title}" src="${imageUrl}" />`);
    }

    addButton(){

    }

    getHTML(){
        this.html.push('</div>');
        return this.html.join("");
    }

    getHTMLNew(){
        if(this.data.type == 1){
            return this.plotCardOne();
        }

        return "undefined card";
    }

}



module.exports = function(card){

    return new CardDesign(card).getHTMLNew();
    // card_1.addTitle(card.title);
    // card_1.addSubTitle(card.subtitle);
    // card_1.addThumbnail(card.imageUrl);

    // return card_1.plotCardOne(card);

    // return "undefined card";
}