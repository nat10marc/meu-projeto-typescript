// Definição da classe de erro personalizado
class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email inválido');
    }
}
try {
    verificarEmail('usuario.com'); // Isto deve lançar um erro
} catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);  // Deve imprimir "Email inválido"
    } else {
        console.error('Um erro inesperado ocorreu:', error);
    }
}
