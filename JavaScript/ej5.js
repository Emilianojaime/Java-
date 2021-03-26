// For

 // a)

 var names = ['juan', 'pedro', 'pepe', 'laura', 'cecilia'];
 var length = names.length
 for (var i = 0;i < length;i++){
   console.log('El nombre en el indice', i,'es', names[i]);
 }

 // b)
// NOTA : Le volvi a poner a la variable del array en nombre "nombre" porque por alguna razon, si le ponia "name" no me funcionaba porque tomaba el array como un string nose porque
 var nombre = ['juan', 'pedro', 'pepe', 'laura', 'cecilia'];
 console.log(nombre);
 for (var i = 0;i < 5;i++){
    nombre[i] = ((nombre[i].toUpperCase()).substring(0, 1)) + ((nombre[i].substring(1)));
    console.log('El Nuevo string es', nombre[i]);
 }

 // c)

var sentence = ''
var names = ['juan ', 'pedro ', 'pepe ', 'laura ', 'cecilia '];
var length = names.length
 for (var i = 0;i < length;i++){
    sentence = sentence + names[i];
 }
    console.log('La cadena sumada es', sentence);

 // d)
 
 var numeros = [];
 for (var i = 0;i < 10;i++){
    numeros[i] = i;
 }
   console.log('El arreglo Resultante es', numeros);

   console.log('Fin Ejercicio 5')