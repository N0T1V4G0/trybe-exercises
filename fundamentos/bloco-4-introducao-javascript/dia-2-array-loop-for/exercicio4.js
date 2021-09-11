// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function calculateMean(numbers) {
  const totalSum = numbers.reduce((sum, number) => {
    return sum + number;
  });
  if (totalSum / numbers.length > 20) {
    return 'Valor maior que 20';
  }
  return 'Valor menor ou igual a 20';
}

console.log(calculateMean(numbers));
