function sumaDigitos(numero) {
    const numeroStr = Math.abs(numero).toString();
    let suma = 0;

    for (let digito of numeroStr) {
        suma += parseInt(digito); }

    return suma;
}

const numero = -12345;
const resultado = sumaDigitos(numero);
console.log(`La suma de los dígitos de ${numero} es ${resultado}.`);

