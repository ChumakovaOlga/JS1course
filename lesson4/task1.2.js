'use strict';
//1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date
// и сохраняет их как свойства объекта. Объекты типа Post должны иметь
// метод edit, который будет принимать текст и записывать его в свойство
// text объекта.


function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function() {
    console.log(this.text);

}
const post1 = new Post('Bill', 'Lorem', 30.11);
post1.edit();