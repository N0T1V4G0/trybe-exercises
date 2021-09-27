const createPokemon = data => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const pokemonImg = document.createElement('img');
  pokemonImg.src = `${data.sprites.front_default}`;
  console.log(pokemonImg);
  li.appendChild(pokemonImg);
  ul.appendChild(li);
};

//createPokemon();

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      createPokemon(data);
      return fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      createPokemon(data);
      return fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
    })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      createPokemon(data);
      return fetch('https://pokeapi.co/api/v2/pokemon/mewtwo');
    })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      createPokemon(data);
      return fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      createPokemon(data);
    });
};

fetchPokemon();
