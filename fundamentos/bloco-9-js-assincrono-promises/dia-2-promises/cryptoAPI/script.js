function addListItem(cryptoObject) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const usdValue = parseFloat(cryptoObject.priceUsd);
  li.innerText = `${cryptoObject.name} (${cryptoObject.symbol}) ${usdValue.toFixed(2)} USD`;
  ul.appendChild(li);
}

function fetchCryptoApi() {
  const API_URL = 'https://api.coincap.io/v2/assets';

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.data);
      const cryptoData = data.data;
      const cryptoDataFiltered = cryptoData.filter((coin, index) => {
        if (index < 10) {
          return coin;
        }
      });
      // console.log(cryptoDataFiltered);
      cryptoDataFiltered.forEach((crypto) => addListItem(crypto));
    })
    .catch((error) => console.log(error));
}

window.onload = fetchCryptoApi();
