let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];

let alimento = "";
let categoria = "";
let remover = "";
let adicionar = "sim";

while(adicionar != "não"){

    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionar = prompt("Você deseja adicionar algum alimento na lista de compras? Responda 'sim' ou 'não'.");
    } else {
        adicionar = prompt("Você deseja adicionar algum alimento na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
	
    while (adicionar != "sim" && adicionar != "não" && adicionar != "remover") {  

	alert(`Operação não reconhecida!`);
        adicionar = prompt("Você deseja adicionar uma alimento na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionar === "não"){ 
	break;
    }
	
    if(adicionar === "sim"){

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
    } else if(adicionar === "remover"){

	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  
		alert(`A lista está vazia!`);
	} else {  

		remover = prompt(`Lista de compras:
        \n  Frutas: ${frutas}
        \n  Laticínios: ${laticinios}
        \n  Doces: ${doces}
        \n  Congelados: ${congelados}
        \n\nQual produto você deseja remover?`);

		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}

alert(`Lista de compras:
\n  Frutas: ${frutas}
\n  Laticínios: ${laticinios}
\n  Doces: ${doces}
\n  Congelados: ${congelados}`);