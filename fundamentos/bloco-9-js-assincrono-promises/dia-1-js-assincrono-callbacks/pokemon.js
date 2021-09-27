const appendPokemon = pokemon => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = pokemon;
  ul.appendChild(li);
};

const requestPokemon = pokemon => {
  setTimeout(() => {
    appendPokemon(pokemon);
  }, 3000);
};

requestPokemon('pikachu');
