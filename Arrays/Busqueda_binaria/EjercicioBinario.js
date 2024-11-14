function busquedaBinaria(arr, objetivo) {
    let izquierda = 0;
    let derecha = arr.length - 1;

    while (izquierda <= derecha) {
        const medio = Math.floor((izquierda + derecha) / 2);
        
        if (arr[medio] === objetivo) {
            return medio; 
        } else if (arr[medio] < objetivo) {
            izquierda = medio + 1; 
        } else {
            derecha = medio - 1;
        }
    }

    return -1; 
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const objetivo = 7;
const resultado = busquedaBinaria(numeros, objetivo);
console.log(`El índice del valor buscado es: ${resultado}`);