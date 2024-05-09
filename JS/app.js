const fs = require('fs');

// Lee un archivo de texto y obtiene un array de números
function leerArchivo(nombreArchivo, callback) {
  fs.readFile(nombreArchivo, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    // Convertir el contenido del archivo en un array de números
    const numeros = data.trim().split(' ').map(Number);
    callback(numeros);
  });
}

// verifica si un número cumple con la propiedad
function cumplePropiedad(numero) {
  const numeroStr = numero.toString();
  return numeroStr[0] === numeroStr[numeroStr.length - 1];
}

// vertifica los números que cumplen con la propiedad según las subtareas especificadas
function filtranum(numeros, resultado) {
    let cantidad = 0;
    const n = numeros.length;
  // Subtareas: verifica las condiciones y cuente los numeros que cumplen con la propiedad
    switch (true) {
      case n === 1 && numeros[0] <= 10:
        if (cumplePropiedad(numeros[0])) {
          resultado.push(numeros[0]);
          cantidad = 1;
        }
        break;
      case n === 1 && numeros[0] <= 20:
        if (cumplePropiedad(numeros[0])) {
          resultado.push(numeros[0]);
          cantidad = 1;
        }
        break;
      case n === 1 && numeros[0] <= 100:
        if (cumplePropiedad(numeros[0])) {
          resultado.push(numeros[0]);
          cantidad = 1;
        }
        break;
      case n === 1:
        if (cumplePropiedad(numeros[0])) {
          resultado.push(numeros[0]);
          cantidad = 1;
        }
        break;
      default:
        for (let i = 0; i < n; i++) {
          if (!isNaN(numeros[i]) && cumplePropiedad(numeros[i])) {
            resultado.push(numeros[i]);
            cantidad++;
          }
        }
        break;
    }
  
    return cantidad;
  }

// Llamar a la función para leer el archivo y procesar los numeros
leerArchivo('JS/numeros.txt', (numeros) => {
  const resultado = [];
  const cantidad = filtranum(numeros, resultado);
  console.log(cantidad);
  console.log(resultado.join(' '));
});
