'use strict';
class PRoduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25
        console.log(this.price );
    }
}
const product2 = new PRoduct('hat', 60);
product2. make25PercentDiscount();