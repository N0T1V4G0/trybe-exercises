const func1 = callback => {
  setTimeout(() => {
    callback();
    console.log('Primeira função');
  }, 2000);
};
const func2 = () => {
  setTimeout(() => {
    console.log('Segunda função');
  }, 3000);
};

func1(func2);
func2();
