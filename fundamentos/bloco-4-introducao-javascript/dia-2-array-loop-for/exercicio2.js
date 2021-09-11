// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sum(numbers) {
  const sum = numbers.reduce((sum, number) => {
    return sum + number;
  });
  return sum;
}

console.log(sum(numbers));
