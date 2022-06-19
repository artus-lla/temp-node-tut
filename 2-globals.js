// GLOBALS

// __dirname  - ruta al directorio actual
// __filename - nombre de fichero
// require    - funciones para usar modulos (CommonJS)
// module     - info acerca del modulo actual (file)
// process    - info acerca del env donde el programa sera ejecutado

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log('Hola Cutervo');
}, 1000);
