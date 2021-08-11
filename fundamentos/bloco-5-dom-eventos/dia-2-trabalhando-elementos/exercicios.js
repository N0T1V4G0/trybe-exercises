//Exercicio 1
//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let headerText = document.createElement('h1');
headerText.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(headerText);
//Exercicio 2
//2. Adicione a tag main com a classe main-content como filho da tag body ;
let mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);
//Exercicio 3
//3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerContent = document.createElement('section');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);
//Exercicio 4
//4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let textSample = document.createElement('p');
textSample.innerHTML = "Algum texto";
centerContent.appendChild(textSample);
//Exercicio 5
//5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);
//Exercicio 6
//6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainContent.appendChild(rightSection);
//Exercicio 7
//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const leftImg = document.createElement('img');
leftImg.className = 'small-image';
leftImg.src = 'https://picsum.photos/200';
leftContent.appendChild(leftImg);
//Exercicio 8
//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const numberListRight = document.createElement('ul');
rightSection.appendChild(numberListRight);
const numberList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < numberList.length; i += 1) {
  const numberNameList = document.createElement('li');
  numberNameList.innerHTML = numberList[i];
  numberListRight.appendChild(numberNameList);
}