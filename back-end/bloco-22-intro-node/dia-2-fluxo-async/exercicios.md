## Exercícios

### 1 - Crie uma função que recebe três parâmetros retorna uma Promise.

1. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) \* c ).
3. Caso o resultado seja menor que 5000, rejeite a Promise com o motivo "Valor muito baixo"
4. Caso o resultado seja maior que 5000, resolva a Promise com o valor obtido.

### 2 - Escreva um código para consumir a função construída no exercício anterior.

1. Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() \* 100 + 1) .
2. Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
3. Utilize then e catch para manipular a Promise retornada pela função:
   1. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
   2. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

### 3 - Reescreva o código do exercício anterior para que utilize async/await .

- Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

### 4 - Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.

- Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
  1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
  2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
  3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
  4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
  5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
  6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
