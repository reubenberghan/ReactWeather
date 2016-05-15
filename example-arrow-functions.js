// 'use strict';

var names = ['Reuben', 'John', 'Aaron'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach(name => console.log('arrowFunc', name));

var returnMe = name => name + '!';

// console.log(returnMe('Reuben'));

var person = {
    name: 'Reuben',
    greet: function greetPerson () {
        names.forEach(name => {
            console.log(`${ this.name } says hi to ${ name }`);
        });
    }
};

// person.greet();

// challenge area

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(1, 3));
console.log(addStatement(9, 0));

console.log(addExpression(1, 3));
console.log(addExpression(9, 0));