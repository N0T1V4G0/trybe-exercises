function fetchCryptoApi() {
  const API_URL = 'https://api.coincap.io/v2/assets';

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      const cryptoData = data.data;
      const cryptoDataFilteres = cryptoData.filter((coin, index) => {
        if (index < 10) {
          return coin;
        }
      });
      console.log(cryptoDataFilteres);
    })
    .catch((error) => console.log(error));
}

window.onload = fetchCryptoApi();
