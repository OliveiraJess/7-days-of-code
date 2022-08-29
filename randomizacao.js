// o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, 
// ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

const maximo = 10
const minimo = 0

const numeroAdivinhacao = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Você errou, tente novamente!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}