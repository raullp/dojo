module("About Asserts (dojo/ahorcado.test.js)");

test("Verificar si una letra esta dentro una palabra", function() {
    var letra = "A";
    var palabra = "AHORCADO";
    var valor = letraEnPalabra(letra, palabra);
    ok(valor,'');
});

test("Verificar si una letra NO esta dentro una palabra", function() {
    var letra = "B";
    var palabra = "AHORCADO";
    var valor = letraEnPalabra(letra, palabra);
    not(valor);
});

test("Correcta actualizacion de pistas", function() {
   var letra = "A";
   var palabra = "HOLA";
   var pistaEsperada = "_ _ _ A";

   var pista = generarPistas(letra, palabra);

   equals(pista, pistaEsperada);
});

test("verificar letras usadas", function(){
	var letrasUsadas = "OL";
	var palabra = "HOLA";
   	var pistaEsperada = "_ O L _";

   	var pista = generarPistas(letrasUsadas, palabra);

   	equals(pista,pistaEsperada);
});

test("Solo algunas letras coinciden", function(){
	var letrasUsadas = "OLST";
	var palabra = "HOLA";
   	var pistaEsperada = "_ O L _";

   	var pista = generarPistas(letrasUsadas, palabra);

   	equals(pista,pistaEsperada);
});

test("Palabra encontrada", function(){
	var letrasUsadas = "OLSTAH";
	var palabra = "HOLA";
   	var pistaEsperada = "H O L A";

   	var pista = generarPistas(letrasUsadas, palabra);

   	equals(pista,pistaEsperada);
});

test("Donde ninguna letra coincide", function(){
	var letrasUsadas = "LSULYH";
	var palabra = "RATON";
   	var pistaEsperada = "_ _ _ _ _";

   	var pista = generarPistas(letrasUsadas, palabra);

   	equals(pista,pistaEsperada);
});

test("Donde ninguna letra coincide", function(){
	var letrasUsadas = "LSULYH";
	var palabra = "RATON";
   	var pistaEsperada = "_ _ _ _ _";

   	var pista = generarPistas(letrasUsadas, palabra);

   	equals(pista,pistaEsperada);
});

test("Verificacion de palabra incompleta",function() {
	var pista = "_ O L _";

	var completa = verificarCompleto(pista);

	not(completa);
});

test("Verificacion de palabra completa",function() {
	var pista = "H O L A";

	var completa = verificarCompleto(pista);

	ok(completa);
});

test("Fail",function() {
	var pista = "MAPA";
	var mapa = map(pista);
	var indicesEsperadoDeA = [1,3];

  //equals(mapa['A'], indicesEsperadoDeA);// fix map method.
});

