// Função assíncrona que simula a busca de dados da API
async function buscarDadosDaAPI(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;
            if (sucesso) {
                resolve('Dados recuperados com sucesso!');
            } else {
                reject('Falha ao recuperar os dados.');
            }
        }, 2000);
    });
}

// Função assíncrona que chama a busca de dados e trata possíveis erros
async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI(); 
        console.log(dados);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chama a função para simular a busca de dados
executarBusca();

