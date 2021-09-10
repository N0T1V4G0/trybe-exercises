// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha'
];

function containsA() {
  // escreva seu código aqui
  // concatena os arrays em uma string
  const stringNames = names.reduce((acc, currentName) => {
    return acc.concat(currentName);
  });
  // transforma a stringNames em um array
  const arrayLetters = stringNames.split('');
  // conta a quantidade de A's e salva em numberOfAs
  const numberOfAs = arrayLetters.reduce((accLetter, currLetter) => {
    if (currLetter === 'A' || currLetter === 'a') {
      return accLetter + 1;
    }
    return accLetter;
  }, 0);
  // retorna a quantidade de A's
  return numberOfAs;
}
console.log(containsA());
assert.deepStrictEqual(containsA(), 20);
