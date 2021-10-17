const R = require('ramda');
const randomCollection = [12, 10, 9, 1, 7, 3, 5, 12, 5, 6, 1, 9, 12, 2, 2];

//utilizando Set
const valoresUnicosSet = [...new Set(randomCollection)];
console.log(
	`colecao com Set(): ${valoresUnicosSet} \n Tamanho da colecao com Set(): ${valoresUnicosSet.length} \n`
);

const uniqRamda = R.uniq(randomCollection);
console.log(
	`Resultado colecao com Ramda: ${uniqRamda} \n Tamanho da colecao Ramda uniq(): ${uniqRamda.length} \n`
);

//preview console colecao original
console.log(`colecao original: ${randomCollection}`);
