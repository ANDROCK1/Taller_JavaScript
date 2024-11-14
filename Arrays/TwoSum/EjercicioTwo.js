function dosSumas(nums, objetivo) {
    const mapa = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complemento = objetivo - nums[i];
        if (mapa.has(complemento)) {
            return [mapa.get(complemento), i]; 
        }
        mapa.set(nums[i], i);
    }

    return []; 
}

const numeros = [2, 7, 11, 15];
const objetivo = 9;
const resultado = dosSumas(numeros, objetivo);
console.log(`Los índices son: ${resultado[0]} y ${resultado[1]}`);