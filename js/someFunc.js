'use strict';

function someFunc(...arg) {
    let evenNumber;
    let result = arg.reduce(function(multiply, current) {
        return multiply * current;
    });
   if((result % 2) === 0) {
       evenNumber = true;
   } else evenNumber = false;
    return 'Добуток аргументів = ' + result + '\n' + 'Парність = ' + evenNumber;
}