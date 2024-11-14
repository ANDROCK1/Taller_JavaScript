function esPalindromo(numero) {
    const strNumero = numero.toString();
    const strInvertido = strNumero.split('').reverse().join('');
    return strNumero === strInvertido;
}

const numero = 12321;
if (esPalindromo(numero)) {
    console.log(`${numero} es un palíndromo.`);
} else {
    console.log(`${numero} no es un palíndromo.`);
}