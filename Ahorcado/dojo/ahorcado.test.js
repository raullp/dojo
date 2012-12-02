module("About Asserts (dojo/ahorcado.test.js)");

test("Verificar si una letra esta dentro una palabra", function() {
    var ahorcado = new Ahorcado("AHORCADO");
    var letra = "A";
    var valor = ahorcado.letraEnPalabra(letra);
    ok(valor,'');
});

test("Verificar si una letra NO esta dentro una palabra", function() {
    var ahorcado = new Ahorcado("AHORCADO");
    var letra = "B";
    var valor = ahorcado.letraEnPalabra(letra);
    not(valor);
});

test("Correcta actualizacion de pistas", function() {
   var ahorcado = new Ahorcado("HOLA");
   var letra = "A";
   var pistaEsperada = "_ _ _ A";

   var pista = ahorcado.generarPistas(letra);

   equals(pista, pistaEsperada);
});

test("verificar letras usadas", function(){
    var ahorcado = new Ahorcado("HOLA");
	  var letrasUsadas = "OL";
   	var pistaEsperada = "_ O L _";

   	var pista = ahorcado.generarPistas(letrasUsadas);

   	equals(pista,pistaEsperada);
});

test("Solo algunas letras coinciden", function(){
  var ahorcado = new Ahorcado("HOLA");
	var letrasUsadas = "OLST";	
   	var pistaEsperada = "_ O L _";

   	var pista = ahorcado.generarPistas(letrasUsadas);

   	equals(pista,pistaEsperada);
});

test("Palabra encontrada", function(){
  var ahorcado = new Ahorcado("HOLA");
	var letrasUsadas = "OLSTAH";
   	var pistaEsperada = "H O L A";

   	var pista = ahorcado.generarPistas(letrasUsadas);

   	equals(pista,pistaEsperada);
});

test("Donde ninguna letra coincide", function(){
  var ahorcado = new Ahorcado("RATON");
	var letrasUsadas = "LSULYH";
   	var pistaEsperada = "_ _ _ _ _";

   	var pista = ahorcado.generarPistas(letrasUsadas);

   	equals(pista,pistaEsperada);
});

test("Donde ninguna letra coincide", function(){
  var ahorcado = new Ahorcado("RATON");
	var letrasUsadas = "LSULYH";
   	var pistaEsperada = "_ _ _ _ _";

   	var pista = ahorcado.generarPistas(letrasUsadas);

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

test("Recuperar letras erroneas", function() {
  var palabra = "iPhone";
  var letrasUsadas = "Android";

  var erroneasEsperadas = "Adr";

  var erroneasRecuperadas = recuperarErroneas(palabra, letrasUsadas);

  equals(erroneasEsperadas, erroneasRecuperadas);
});

test("Fail: Ignore me!",function() {
	var pista = "MAPA";
	var mapa = map(pista);
	var indicesEsperadoDeA = [1,3];

  //equals(mapa['A'], indicesEsperadoDeA);// fix map method.
});

