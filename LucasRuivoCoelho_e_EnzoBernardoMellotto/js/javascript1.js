//JAVASCRIPT


//questão 1:
/*Escreva um programa em JavaScript que apresente
 uma caixa de alerta para o usuário com uma 
 informação qualquer.
*/
function f_alert(){
	window.alert('Seja bem vindo(a) ao nosso site de explicações sobre JavaScript!!!');	
}

//2) Crie um  script em que o usuário clicará com o botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.

function btn_alert() {	
	alert('Alert acionado!');
}

/*3)  De exemplo dos seguintes formas de trabalhar com DOM(Document Object Model), e explique:
     . document.getElementById();
     . document.getElementsByTagName();
     . document.getElementsByClassName();
     . document.querySelector();
     . document.querySelectorAll();*/

function dom() {
	let texto = window.document.getElementById("id_um").value;
	window.document.getElementById("id_dois").innerHTML = texto;
}

function tagname() {
	var collection = document.getElementsByTagName("p");
	window.document.getElementById("demo").innerHTML = collection[1].innerHTML;
	
}

function class_name(){
	let classes = document.getElementsByClassName("classe");
	window.document.getElementById("demonstração").innerHTML = classes[0].innerHTML;
}

function dom_selector() {
	window.document.querySelector(".exemplo").style.backgroundColor = "gray";
	window.document.querySelector(".exemplo").style.color = "blue";
	
}

function selector_all() {
	let lista = window.document.querySelectorAll(".s_all");
	for (let i = 0; i < lista.length; i++) {
		lista[i].style.backgroundColor = "gray";
		lista[i].style.color = "blue";
	}
} 

/*4) Descreva e crie exemplos com suas formas diferente eventos no javascript,segue alguns exemplo:
  . onmouseover
  . onfocus;
  . onchange;*/
  
//onmouseover  
function mouseOver() {
  document.getElementById("over").style.color = "red";
}

function mouseOut() {
  document.getElementById("over").style.color = "black";
}

//onfocus
function focus_function() {
  document.getElementById("id_nome").style.backgroundColor = "red";
}

//onchange
function f_onchange() {
  var x = document.getElementById("selecionar").value;
  document.getElementById("demo").innerHTML = "Você selecionou: " + x;
}

function minhatentativa() {
	document.getElementById('paragrafo').innerHTML += "Muito bem! ";
}





/*5) De exemplo de os tipos de funções:
    . Função Nomeada;
    . Função Nomeada com argumento(parametro) e retorno;
    . Função com Construtor;
    . Função Literal (variável);
    . Função de Flecha(Arrow functions);*/

// Função Nomeada
function nomeada() {
	document.getElementById("par1").innerHTML = "Função nomeada";
}
//função nomeada com parâmetro
function n_par(texto){
	document.getElementById("par2").innerHTML = texto;
}
//função com Construtor
function construtor() {
	function carro(marca, cor, ano) {
		this.MarcaName = marca;
		this.CorName = cor;
		this.anoNum = ano;
	}

	const MeuCarro = new carro("Ford", "azul", 2010);

	MeuCarro.frase = function() {
		return this.MarcaName + " da cor " + this.CorName;
	};

	document.getElementById("demo").innerHTML =
	"Meu carro é um  " + MeuCarro.frase();
}

//função literal (variável)
let variavel = function() {
	document.getElementById("vari").innerHTML = "Função literal (variável)";
}
//Arrow Function
flecha = () => {
	document.getElementById("arrow").innerHTML = "Arrow Function";
} 


//6)

function btn_funcao() {
	var count = 0;
	var btn = document.getElementById("btn");
	var disp = document.getElementById("display");

	btn.onclick = function () {
		count++;
		disp.innerHTML = "Você clicou "+ count + " vezes neste botão!<br>";
	}

}


//7)
function caixa_alta() {
	let i = 0;
	btn.onclick = function () {
		i++;
		let texto = document.getElementById("nome").value;
		let palavras = document.getElementsByTagName("p");
		let caixa = texto.toUpperCase();
		palavras[i - 1].innerHTML = caixa;
	}
	
}
//8
function somas() {
	let i = 0;
		btn.onclick = function () {
			i++;
			let n1 = document.getElementById("nome").value;
			let n2 = document.getElementById("nome2").value;
			let soma = parseInt(n1) + parseInt(n2);
			let palavras = document.getElementsByTagName("p");
			palavras[i - 1].innerHTML = soma;
		}
	
}
