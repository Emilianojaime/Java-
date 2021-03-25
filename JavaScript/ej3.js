// Arrays


 // a)

 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 console.log('Los meses numero 5 y 11 son respectivamente (sin considerar 0)', months[4], 'y', months[10]);

 // b)

months.sort();
console.log('Los meses ordenados alfabeticamente son', months);

 // c)

 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 months.push('Elemento Posterior');
 months.unshift('Elemento Anterior');
 console.log('El arreglo con los elemntos agregados es', months);

 // d)

 months.pop();
 months.shift();
 console.log('El arreglo con los elementos sustraidos es', months);

 // e)
 
 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 months.reverse();
 console.log('El arreglo con los meses invertidos es', months);

 // f)

 var chain = months.join('-');
 console.log('El string es', chain);

 // g)

 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 monthscopy = months.slice(4, 11);
 console.log('El arreglo resultante es', monthscopy);

 console.log('Fin Ejercicio 3 , comienzo Ejercicio 4 --------------------------------------');