const checkNumber = require('./exercicio-1');

const randCheckNumber = () => {
  const randNumber1 = Math.floor(Math.random() * 100 + 1);
  const randNumber2 = Math.floor(Math.random() * 100 + 1);
  const randNumber3 = Math.floor(Math.random() * 100 + 1);
  checkNumber(randNumber1, randNumber2, randNumber3)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

randCheckNumber();
