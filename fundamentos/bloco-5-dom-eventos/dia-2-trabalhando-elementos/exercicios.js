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
