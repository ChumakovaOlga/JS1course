//4. Реализовать основные 4 арифметические
// операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения
// должна принимать два числа, складывать их
// и возвращать результат.
//Обязательно использовать оператор return.
'use strict';

const sum = (f,g) => console.log(f + g);//в стрелочной функции return уже есть

sum(3,2);

const substract = (f,g) => {
    return console.log(f - g);//здесь нужно писать return, так как есть фигурные скобки
}
substract(3,2);

function multiply (f,g) {
    return console.log(f * g);
}
multiply(3,2);

function divide (f,g) {
    return console.log(f / g);
}
divide(3,2);