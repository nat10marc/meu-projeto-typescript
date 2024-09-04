function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        const tempoDeExecucao = fim - inicio;
        console.log(`O método ${propertyKey} levou ${tempoDeExecucao.toFixed(2)} ms para ser executado.`);
        return resultado;
    };
}

class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        // Simula uma soma de números
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);  // Deve exibir o tempo de execução
