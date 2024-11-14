function sumaMaximaSubarreglo(arr) {
    let maxActual = arr[0];
    let maxGlobal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxActual = Math.max(arr[i], maxActual + arr[i]);
        if (maxActual > maxGlobal) {
            maxGlobal = maxActual;
        }
    }

    return maxGlobal;
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(`La suma máxima de un subarreglo es: ${sumaMaximaSubarreglo(array)}`);