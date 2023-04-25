// Forma 1 Importar Todo el Modulo
//const saludos = require("./saludos.js");

// Forma 2 Importar una o Varías Funciónes del modulo DESESTRUCTURACIÓN
// const {saludar, holaMundo} = require('./saludos.js');

// Llamar Funciones de Otro Modulo
// console.log(saludar('Marcela'));
// console.log(holaMundo());

// Modulo CONSOLE built-in
// console.log('Hola Mundo');
// console.warn('Creando una alerta!');
// console.error(new Error('Ocurrio un Error'));

//Modulo PROCESS built-in nos sirve para saber detalles del entorno de ejecución
// console.log(process);
// console.log(process.env);
// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// for(let i = 2; i < process.argv.length; i++){
//  console.log(process.argv[i]);
// }
// console.log(process.memoryUsage());

// Modulo OS(operation system) nos sirve para ver información del sistema operativo
// donde se ejecuta el programa, no es un modulo global por lo tanto hay que importarlo.
// const os = require('os');
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());

//Modulo TIMER es un tipo de funciones asincronas que se ejecutan cada cierto tiempo
// en programación a esto se le llama Higher-Order Programing.
// function mostrarTema(tema) {
//     console.log(`Estoy aprendiendo: ${tema}`);
// }
// mostrarTema('Python');
// setTimeout(mostrarTema, 5000, 'Node JS');
// function sumar(a,b) {
//     console.log(`El Total de la Suma es: ${a+b}`);
// }
// setTimeout(sumar, 3000, 5,9);
// console.log('Antes de setImmediate()');
// setImmediate(mostrarTema, 'Node JS');
// console.log('Despues de setImmediate()');
// setInterval(mostrarTema, 2000, 'Express');

// Modulo FS(File System) este modulo nos va ha permitir manipular información de los archivos
// se puede ejecutar de forma asincrona por defecto o se puede utilizar de forma sincrona
// const fs = require('fs');
// Ver el archivo
// console.log('1');
// fs.readFile('index.html', 'utf-8', (err, contenido)=>{
//   if(err){
//     throw err;
//   }else{
//     console.log(contenido);
//   }
// });
// console.log('2');
// Renombrando el archivo
// fs.rename('marcela.html', 'main.html', (err)=>{
//   if(err){
//     throw err;
//   }
//   console.log('Rename True');
// });
// console.log('3');
//Agregar contenido a un archivo
// fs.appendFile('index.html', '<div>Hola desde JS</div>', (err)=>{
//   if(err){
//     throw err;
//   }
//   console.log('File Update');
// });
// console.log('4');
// Reemplazar todo el contenido del archivo
// fs.writeFile('index.html', 'Generando Nuevo Contenido', (err)=>{
//   if(err){
//     throw err;
//   }
//   console.log('Replaced Content');
// });
// console.log('5');
// Eliminar Archivos
// fs.unlink('main.html', (err)=>{
//   if(err){
//     throw err;
//   }
//   console.log('File Drop');
// });
// console.log('6');

// Modulo Events
// const EventEmitter = require('events');
// console.log(EventEmitter);
// const emisorProductos = new EventEmitter();
// emisorProductos.on('compra', (total, cantidad)=>{
//   console.log(`Cantidad de Productos: ${cantidad}`);
//   console.log(`Total de la Compra: $${total}`);
// });
// emisorProductos.emit('compra', '300.000', 5);

// Promesas en JavaScript
// const promesaCumplida = false
// const miPromesa = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(promesaCumplida){
//       resolve('Promeza Cumplida o Resuelta!');
//     }else{
//       reject('La Promesa fue Rechazada....');
//     }
//   }, 3000);
// });

// const manejarPromesaCumplida = (valor)=>{
//   console.log(valor);
// }

// const manejarPromesaRechazada = (razonRechazo)=>{
//   console.log(razonRechazo);
// }

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

// Async Await
function ordenarProductos (productos){
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando ${productos} de DolarCity`);
        setTimeout(()=>{
            if(productos === 'taza'){
                resolve('Ordenando una taza de DolarCity');
            }else{
                reject('Este producto no esta disponible actualmente...');
            }
        }, 2000)
    }) ;
}

function procesarPedidos (respuesta){
    return new Promise(resolve=>{
      console.log('Procesando el pedido...');
      console.log(`La respuesta fue: "${respuesta}"`);
      setTimeout(()=>{
        resolve('Gracias por tu compra. Disfruta tu pedido!');
      }, 4000);
    });
}

// Sin Async Await
// ordenarProductos('camisa')
//   .then(respuesta =>{
//     console.log('Respuesta recibida');
//     console.log(respuesta);
//     return procesarPedidos(respuesta);
//   })
//   .then(respuestaProcesada =>{
//     console.log(respuestaProcesada);
//   })
//   .catch(error=>{
//     throw error;
//   });

// Con Async Await 
async function realizarPedido (producto){

  try{
    const respuesta = await ordenarProductos(producto);
    console.log('Respuesta recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedidos(respuesta);
    console.log(respuestaProcesada);
  }catch(err){
    console.log(err);
  }
  
};
realizarPedido('camisa');