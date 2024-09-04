function encontrarMaiorElemento<T>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }

    // Inicializa o maior elemento com o primeiro elemento do array
    let maiorElemento: T = array[0];

    for (const elemento of array) {
        if (typeof elemento === 'number' && typeof maiorElemento === 'number') {
            // Compara números
            if (elemento > maiorElemento) {
                maiorElemento = elemento;
            }
        } else if (typeof elemento === 'string' && typeof maiorElemento === 'string') {
            // Compara strings
            if (elemento.localeCompare(maiorElemento) > 0) {
                maiorElemento = elemento;
            }
        } else {
            throw new Error("O array deve conter apenas números ou apenas strings.");
        }
    }

    return maiorElemento;
}

// Exemplo de uso:
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'

console.log(maiorNumero); // 30
console.log(maiorPalavra); // 'zebra'

