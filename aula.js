const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const lol = collection.reduce(getSum, 10);
console.log('this is ' + lol);
