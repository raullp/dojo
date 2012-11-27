

function letraEnPalabra(letra, palabra)
{
	var resultado = palabra.indexOf(letra);
	return (resultado>-1);
}


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