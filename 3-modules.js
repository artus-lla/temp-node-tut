// CommonJS, cada fichero es un modulo (por defecto)
// Modules - codigo encapsulado (solo comparte lo minimo)
const names = require('./4-names');

// otra forma de importar, con paréntesis
//const { john, peter } = require('./4-names.js');
const sayHi = require('./5-utils');

// Alternative import
const data = require('./6-alternative-flavor');
// console.log(data);

require('./7-mind-grenade');
// como se llama automáticamente, muestra la suma de dos números



// muestra las variables, funciones, constantes que estamos exportando
// y otra información de utilidad de los módulos
//console.log(names);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
