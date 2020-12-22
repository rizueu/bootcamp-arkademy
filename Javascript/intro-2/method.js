const dataString = ['BMW', 'Yamaha', 'Honda', 'Ducati', 'Suzuki'];
const dataNumber = [1, 5, 20, 19, 37, 100, 4, 3, 2];

const dataSort = dataString.sort();
const dataNumberSort = dataNumber.sort((min, max) => max - min);

console.log(dataSort);
console.log(dataNumberSort);
