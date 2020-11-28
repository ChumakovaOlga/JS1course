//5. Реализовать функцию с тремя параметрами:
//     function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation –
// строка с названием операции. В зависимости от
// переданного значения операции (использовать switch)
//     выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть
//         полученное значение.

'use strict';

function mathOperation(arg1, arg2, operation) {
let result;
switch ( operation ) {
    case "sum":
        result = arg1 + arg2
        break;

    case "subsrtact" :
       result = arg1 - arg2
        break;

    case "multily":
        result = arg1 * arg2
        break;

    case "divide":
        result = arg1 / arg2

}
console.log(result);
return result;
}
mathOperation(3,2, "sum")
mathOperation(3,2, "subsrtact")
mathOperation(3,2, "multily")
mathOperation(3,2, "divide")
