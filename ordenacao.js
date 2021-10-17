const R = require('ramda');

const person = [
	{
		firstName: 'John',
		lastName: 'Doe',
		age: 50,
		eyeColor: 'blue',
	},
	{
		firstName: 'Lee',
		lastName: 'Janson',
		age: 20,
		eyeColor: 'brown',
	},
	{
		firstName: 'Shadow',
		lastName: 'Foo',
		age: 40,
		eyeColor: 'green',
	},
	{
		firstName: 'Will',
		lastName: 'Match',
		age: 21,
		eyeColor: 'none',
	},
];

const ordAsc = R.ascend(R.prop('age'));

const peopleOrdByAgeAsc = R.sort(ordAsc, person);

console.log(peopleOrdByAgeAsc);
