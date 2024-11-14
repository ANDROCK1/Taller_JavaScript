const palabras = ["hola", "alo", "perro", "gato", "oso"]
const agruparAnagramas = (palabras) => {
    const anagramas = {}
    palabras.forEach(palabra => {
        const clave = palabra.split('').sort().join('')
        if (anagramas[clave]) {
            anagramas[clave].push(palabra)
            } else {
                anagramas[clave] = [palabra]
                }
                })
                return Object.values(anagramas)
                }
                console.log(agruparAnagramas(palabras))