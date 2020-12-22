const someWord = 'Testing';
const constantWord = 174;
const someBoolean = true;
const someFunction = function(){
    return true;
};
const someObject = {
    firstName: 'Rizki',
    middlename: 'Ramadhan',
    lastName: 'I.M'
};
const someArray = ['1', '2', '3'];
const someSymbol = Symbol();

console.log(typeof(someWord));
console.log(typeof(constantWord));
console.log(typeof(someBoolean));
console.log(typeof(someFunction()));
console.log(typeof(someObject));
console.log(typeof(someArray));
console.log(typeof(someSymbol));