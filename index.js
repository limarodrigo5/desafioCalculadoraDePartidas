/* Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerWins;
let playerLoses;

readlineInterface.question('Informe o número de vitórias do jogador: ', (wins) => {
    playerWins = wins;
    askLevel();

function askLevel() {
  readlineInterface.question('Informe o número de derrotas do jogador: ', (loses) => {
    playerLoses = loses;
    let result = Number(wins) - Number(loses);
    let classification = '';

    if (result < 10) {
        classification = 'Ferro';
    }
    else if (result >= 11 && result <= 20) {
        classification = 'Bronze';
    }
    else if (result >= 21 && result <= 50) {
        classification = 'Prata';
    }
    else if (result >= 51 && result <= 80) {
        classification = 'Ouro';
    }
    else if (result >= 81 && result <= 90) {
        classification = 'Diamante';
    }
    else if (result >= 91 && result <= 100) {
        classification = 'Lendário';
    }
    else if (result >= 101) {
        classification = 'Imortal';
    }
       

    console.log(`O jogador tem saldo de ${result} vitórias e está no nível de ${classification}`);
    readlineInterface.close();
  });
}}
);