const estatusPedidos = ()=>{
  return Math.random() < 0.8;
};

// for(i = 0; i<10; i++){
//   console.log(estatusPedidos());
// }

const miPedidoPizzas = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if(estatusPedidos()){
      resolve('El pedido fue completado con exito!');
    }else{
      reject('El pedido no se ha podido realizar....');
    }
  }, 3000);
});

const confirmarPedido = (mensajeConfirmacion) => {
  console.log(mensajeConfirmacion);
}

const rechazarPedido = (mensajeRechazo) => {
  console.log(mensajeRechazo);
}

// miPedidoPizzas.then(confirmarPedido, rechazarPedido);

// miPedidoPizzas
//   .then((mensajeConfirmacion)=>{
//     console.log(mensajeConfirmacion);
//   })
//   .catch((mensajeRechazo) => {
//     console.log(mensajeRechazo);
//   })

miPedidoPizzas.then(confirmarPedido).catch(rechazarPedido);