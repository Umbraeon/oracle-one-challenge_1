function criptografarTexto(texto) {
	const textoCriptografado = texto.replace(/e/g, "enter")
	.replace(/i/g, "imes")
	.replace(/a/g, "ai")
	.replace(/o/g, "ober")
	.replace(/u/g, "ufat");
	return textoCriptografado;
}

function botaoCriptografar() {
	const textarea = document.querySelector('#texto'); 
	const response = document.querySelector("#mensagem"); 

	if (textarea.value.length === 0) { 
		const cssElement = document.querySelector(".image-container img"); 
		const messageElement = document.querySelector(".message"); 
		cssElement.style.display = "block"; 
		messageElement.style.display = "block"; 
		response.innerHTML = ""; 
		return; 
	}

	const textoCriptografado = criptografarTexto(textarea.value);
	response.innerHTML = textoCriptografado; 
	textarea.value = "";

	const cssElement = document.querySelector(".image-container img");
	cssElement.style.display = "none";
	const messageElement = document.querySelector(".message"); 
	messageElement.style.display = "none"; 
}


function descriptografarTexto(texto) {
	
	const textoDescriptografado = texto.replace(/enter/g, "e")
	.replace(/imes/g, "i")
	.replace(/ai/g, "a")
	.replace(/ober/g, "o")
	.replace(/ufat/g, "u");
	return textoDescriptografado;
}

function botaoDescriptografar() {
	const response = document.querySelector('#mensagem'); 
	const textarea = document.querySelector("#texto"); 

	if (textarea.value.length === 0) { 
		const cssElement = document.querySelector(".image-container img"); 
		const messageElement = document.querySelector(".message"); 
		cssElement.style.display = "block"; 
		messageElement.style.display = "block"; 
		response.innerHTML = ""; 
		return;
	}

	const textoDescriptografado = descriptografarTexto(textarea.value); 
	response.innerHTML = textoDescriptografado;
	textarea.value = ""; 

	const cssElement = document.querySelector(".image-container img"); 
	cssElement.style.display = "none";
	const messageElement = document.querySelector(".message"); 
	messageElement.style.display = "none";
}

function copiarTexto() {
	const resposta = document.querySelector('#mensagem');
	const texto = resposta.innerText;
	navigator.clipboard.writeText(texto);
}