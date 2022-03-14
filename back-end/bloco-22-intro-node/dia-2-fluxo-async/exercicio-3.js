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

const randCheckNumberAsync = async () => {
  const randNumber1 = Math.floor(Math.random() * 100 + 1);
  const randNumber2 = Math.floor(Math.random() * 100 + 1);
  const randNumber3 = Math.floor(Math.random() * 100 + 1);
  try {
    const result = await checkNumber(randNumber1, randNumber2, randNumber3);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

randCheckNumberAsync();
