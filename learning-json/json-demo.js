// const curso = require('./curso.json');
// console.log(curso.temas[0]);

let infoCurso = {
  "titulo": "Aprendiendo Node JS",
  "numVistas": 2986,
  "numLike": 677,
  "temas": [
    "JavaScript",
    "Node JS"
  ],
  "publico": true
};

// Convirtiendo un objeto de JS a formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// Convertir de string en formato JSON a un objeto de JS

let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);