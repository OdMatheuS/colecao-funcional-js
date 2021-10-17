const R = require('ramda');

const randomCollection = [12, 10, 9, 1, 7, 3, 5, 12, 5, 6, 1, 9, 12, 2, 2];

//tradicional / mdn
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const resultReduce = randomCollection.reduce(reducer);
console.log(`resultado reduce tradicional:${resultReduce}`);

const somaValoresArrayRamda = R.sum(randomCollection);

console.log(`resultado total soma valores com ramda:${somaValoresArrayRamda}`);
