function esPar(numero) {
    if (numero === 0) {
        return console.log('Ingresa un numero diferente a 0');
    }
    return numero % 2 === 0 ? console.log("El numero es par") : console.log("El numero es impar");
}

