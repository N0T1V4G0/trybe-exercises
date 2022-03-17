const checkNumber = (num1, num2, num3) => {
  const numbers = [num1, num2, num3];
  return new Promise((resolve, reject) => {
    numbers.forEach((number) => {
      if (typeof number !== 'number') {
        reject('Informe apenas números.');
      }
    });
    const result = (num1 + num2) * num3;
    if (result < 5000) reject('Valor muito baixo');
    resolve(result);
  });
};

module.exports = checkNumber;
