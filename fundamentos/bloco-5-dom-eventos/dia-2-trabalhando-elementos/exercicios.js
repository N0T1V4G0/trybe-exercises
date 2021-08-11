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