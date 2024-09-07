function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        throw new Error("O array não pode estar vazio.");
    }
    // Inicializa o maior elemento com o primeiro elemento do array
    var maiorElemento = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var elemento = array_1[_i];
        if (typeof elemento === 'number' && typeof maiorElemento === 'number') {
            // Compara números
            if (elemento > maiorElemento) {
                maiorElemento = elemento;
            }
        }
        else if (typeof elemento === 'string' && typeof maiorElemento === 'string') {
            // Compara strings
            if (elemento.localeCompare(maiorElemento) > 0) {
                maiorElemento = elemento;
            }
        }
        else {
            throw new Error("O array deve conter apenas números ou apenas strings.");
        }
    }
    return maiorElemento;
}
// Exemplo de uso:
var maiorNumero = encontrarMaiorElemento([10, 20, 30]); // 30
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']); // 'zebra'
console.log(maiorNumero); // 30
console.log(maiorPalavra); // 'zebra'
