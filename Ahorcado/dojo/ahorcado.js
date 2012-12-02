function Ahorcado(palabra){
	this.palabra = palabra;
}

Ahorcado.prototype.letraEnPalabra = function(letra) {
	var resultado = this.palabra.indexOf(letra);
	return (resultado>-1);
};

Ahorcado.prototype.generarPistas = function(letrasUsadas) {
	/*Las letras usadas son letras concatenadas*/
	var pista = "";
	for (var i = 0; i < this.palabra.length; i++) {
		
		var posicion = letrasUsadas.indexOf(this.palabra[i]);
		if( posicion> -1){
			pista += letrasUsadas[posicion]+" ";
		}else{
			pista += "_ ";
		}
	}

	return pista.trim();
};

function generarPistas(letrasUsadas, palabra){
	/*Las letras usadas son letras concatenadas*/
	var pista = "";
	for (var i = 0; i < palabra.length; i++) {
		
		var posicion = letrasUsadas.indexOf(palabra[i]);
		if( posicion> -1){
			pista += letrasUsadas[posicion]+" ";
		}else{
			pista += "_ ";
		}
	}

	return pista.trim();
}

function verificarCompleto(pista) {
	return pista.indexOf("_")==-1;
}

function generarPalabra() {
	var palabras = new Array("raton", "mapa", "texto");
	var index = 1;
	return palabras[index];
}

function recuperarErroneas(palabra, letrasUsadas) {
	var erroneas = "";

	for(var index in letrasUsadas) {
		var letra = letrasUsadas[index];

		if((palabra.indexOf(letra) < 0) && 
			(erroneas.indexOf(letra) < 0)) {
			erroneas += letra;
		}
	}

	return erroneas;
}

function map(palabra) {
	var dictionary = {};
	for (var i = 0; i < palabra.length; i++) {
		var letra = palabra[i];
		var list;
		if(dictionary[letra])
			list = dictionary[i];
		else {
			list = [];
		}
		list:i;
		dictionary[letra] = list;
	}

	return dictionary;
}