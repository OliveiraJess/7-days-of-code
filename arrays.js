let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

let alimento = "";
let categoria = "";
let adicionar = "sim";  


while(adicionar != "não"){
    adicionar = prompt("Você deseja adicionar alguma alimento na lista de compras? Responda 'sim' ou 'não'.");

    while (adicionar != "sim" && adicionar != "não") {  
	alert(`Operação não reconhecida!`);
        adicionar = prompt("Você deseja adicionar alguma alimento na lista de compras? Responda 'sim' ou 'não'.");
    }

    if (adicionar === "não"){ 
        break;
    }
	
    alimento = prompt("Qual alimento você deseja inserir?");

    categoria = prompt("Em qual categoria essa alimento se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");

    if(categoria === 'frutas'){
        frutas.push(alimento);

    } else if (categoria === 'laticínios'){
        laticinios.push(alimento);

    } else if (categoria === 'doces'){
        doces.push(alimento);

    } else if (categoria === 'congelados'){
        congelados.push(alimento);
        
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}

alert(`Lista de compras:
\n  Frutas: ${frutas}
\n  Laticínios: ${laticinios}
\n  Doces: ${doces}
\n  Congelados: ${congelados}`);