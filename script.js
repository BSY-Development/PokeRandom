const img = document.querySelector('.token');
const number = document.querySelector('.number');
const namePokemon = document.querySelector('.name');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const random = Math.ceil(Math.random() * 898);
const url = 'https://pokeapi.co/api/v2/pokemon/' + random;
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    img.src = data.sprites.front_default;
    namePokemon.innerHTML = capitalizeFirstLetter(data.name);
    number.innerHTML = data.id;
  })
  .catch((err) => console.log(`Erro: ${err}`));
