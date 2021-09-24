const requestPokemonFromServer = callback => {
  setTimeout(() => {
    callback('squirtle');
  }, 3000);
};

const appendPokemon = pokemon => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = pokemon;
  ul.appendChild(li);
};

const fetchPokemon = () => {
  requestPokemonFromServer(pokemon => {
    console.log(pokemon);
  });
};

fetchPokemon();
