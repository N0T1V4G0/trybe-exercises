// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function printNumbers(numbers) {
  numbers.forEach(element => {
    console.log(element);
  });
}

printNumbers(numbers);
