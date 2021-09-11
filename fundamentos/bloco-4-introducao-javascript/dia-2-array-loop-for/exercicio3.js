// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function calculateMean(numbers) {
  const totalSum = numbers.reduce((sum, number) => {
    return sum + number;
  });
  return totalSum / numbers.length;
}

console.log(calculateMean(numbers));
