const checkNumber = require('./exercicio-1');

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
