// Pedir para o usuário responder 3 perguntas:
// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?
// No final, o sistema vai exibir a mensagem:
// "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const mensagem = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(mensagem);