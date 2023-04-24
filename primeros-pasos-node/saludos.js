function saludar(nombre){
  return `Hola ${nombre}`;
}

function holaMundo() {
  return 'Hola Mundo!'
}

// Forma 1 de Exportar Funciones de Modulo
//module.exports.saludar = saludar;

// Forma 2 de Exportar Funciones de Modulo
module.exports = {
  saludar: saludar,
  holaMundo: holaMundo
}