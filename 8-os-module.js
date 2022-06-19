const os = require('os');

// informacion del usuario actual
const user = os.userInfo();
console.log(user);

// metodo que devuelve el tiempo que lleva ejecutandose el sistema (uptime)
console.log(`The System Uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOS);
