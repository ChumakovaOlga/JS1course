'use strict';
class POst {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(){
        console.log(this.text);
    }
}
const post2 = new POst('Bill', 'Lorem', 30.11);
post2.edit();