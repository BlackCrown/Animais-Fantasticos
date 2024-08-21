import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // Cria a div contendo informacoes com o total de aniamis
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Anima os numeros de cada animal
  function animaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Preenche cada dado de animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  // Faz o fetch dos animnais atraves de um arquivo JSON
  // e cria cada animal utilizando o createAnimal()
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
