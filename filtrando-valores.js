const R = require('ramda');

const randomCollection = [12, 10, 9, 1, 7, 3, 5, 12, 5, 6, 1, 9, 12, 2, 2];
const persons = [
	{
		name: 'Sebastian',
		height: '172',
	},
	{
		name: 'Clark',
		height: '167',
	},
];

const filterPadraoNumPares = randomCollection.filter((el) => el % 2 === 0);
console.log(`Filter padrao Js, retorno nums pares: ${filterPadraoNumPares} \n`);

const filterAlturaPessoas = persons.filter((n) => n.height > 167).map((h) => h.height);
console.log(`Filter padrao Js, 'compondo' filter().map(); retorno altura pessoa maior que 167 cm: ${filterAlturaPessoas} \n`);

//Ramda
const ramdaFilterNumPares = R.filter((n) => n % 2 === 0, randomCollection);
console.log(`Utilizando Ramda filter(), retorno nums pares: ${ramdaFilterNumPares} \n`);

const ramdaFiltroAlturaPessoas = R.filter((n) => n > 167, persons.map((h) => h.height));
console.log(`Utilizando Ramda filter(predicado,map()); retorno altura pessoa maior que 167 cm: ${ramdaFiltroAlturaPessoas}`);