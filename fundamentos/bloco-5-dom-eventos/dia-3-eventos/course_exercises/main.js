const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;
2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1 Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1 Que tal redirecionar para seu portifólio?
5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/

//Exercício 2
function switchTech() {
  const techChoice = document.querySelector('.tech');
  techChoice.classList.remove('tech');
  this.classList.add('tech');
}

firstLi.addEventListener('click', switchTech);
secondLi.addEventListener('click', switchTech);
thirdLi.addEventListener('click', switchTech);

//Exercício 3
input.addEventListener('input', putText);
function putText() {
  let techText = document.querySelector('.tech');
  techText.innerHTML = this.value;
}

//Exercício 4
const myTop3 = document.querySelector('#mySpotrybefy');
myTop3.addEventListener('dblclick', goToPage);
function goToPage() {
  window.location = 'http://www.w3schools.com';
}

//Exercício 5
myTop3.addEventListener('mouseover', changeColor);
myTop3.addEventListener('mouseleave', changeColorWhite);
function changeColor() {
  this.style.color = '#ff0000';
}
function changeColorWhite() {
  this.style.color = '#ffffff';
}

// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
