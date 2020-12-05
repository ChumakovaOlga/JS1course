'use strict';
// б) конструктор AttachedPost, который принимает параметры author, text,
// date. Проинициализируйте эти свойства с помощью конструктора Post,
// чтобы не дублировать код. Также в конструкторе AttachedPost должно
// создаваться свойство highlighted со значением false. Унаследуйте
// в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
// который будет назначать свойству highlighted значение true.
class POSt {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(){
        console.log(this.text);
    }
}
class AttachedPost extends POSt {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
const attachedPost1 = new AttachedPost('Bill', 'Lorem', 30.11);

attachedPost1.edit();
attachedPost1.makeTextHighlighted();

console.log(attachedPost1);