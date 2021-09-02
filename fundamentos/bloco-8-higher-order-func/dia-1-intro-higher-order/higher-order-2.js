//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkAnswer = userGuess => {
  const raffleNumber = Math.floor(Math.random() * 5 + 1);
  console.log(raffleNumber);
  if (userGuess === raffleNumber) {
    return true;
  } else {
    return false;
  }
};

const checkRaffle = (userGuess, checkAnswer) => {
  if (checkAnswer(userGuess)) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};

console.log(checkRaffle(4, checkAnswer));
