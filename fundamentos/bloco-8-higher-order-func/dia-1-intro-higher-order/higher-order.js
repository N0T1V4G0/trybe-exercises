//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function calculatePoints(rightAnswers, studentAnswers) {
  let points = 0;
  for (let i = 0; i < rightAnswers.length; i++) {
    if (rightAnswers[i] === studentAnswers[i]) {
      points = points + 1;
    } else if (
      rightAnswers[i] !== studentAnswers[i] &&
      studentAnswers[i] !== 'N.A'
    ) {
      points = points - 0.5;
    }
  }
  return points;
}

function calculateFinalCount(rightAnswers, studentAnswers, calcPoints) {
  return calcPoints(rightAnswers, studentAnswers);
}

console.log(
  calculateFinalCount(RIGHT_ANSWERS, STUDENT_ANSWERS, calculatePoints)
);
