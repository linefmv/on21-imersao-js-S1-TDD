const { ContaBancaria } = require('./conta-bancaria');


describe('Conta Bancaria', () => {
    const dadosDaContaBancaria = new ContaBancaria('Aline Viana', 1000, 200, 0, 1001);
    it('Deve retornar o saldo do titular', () => {
        expect(dadosDaContaBancaria.consultaDeSaldo()).toEqual(1000);
    }
    )
    it('Deve retornar o deposito do titular', () => {
        expect(dadosDaContaBancaria.verificarDeposito()).toEqual(0);
    })
    it('Deve retornar os dados do titular', () => {
        expect(dadosDaContaBancaria.visualizarDadosDoTitular()).toEqual('Aline Viana' && 1000 && 200);
    })

    it('Deve retornar o saque bancario', () => { 
        expect(dadosDaContaBancaria.realizarSaqueBancario()).toMatch('Conseguimos liberar para você! Mas no momento você está no negativo. O saldo atual do seu limite: -199' || 'Lamentamos, mas você não possui saldo suficiente para realizar o saque.');
      })
    it('Deve retornar a mensagem de sucesso ao aumentar o limite', () => {
        expect(dadosDaContaBancaria.aumentoNoLimite()).toMatch('Conforme seu cadastro, conseguimos liberar mais R$: 200,00 para aumentar o seu limite. Seu novo limite é: 400');
    })
    it('Deve retornar a mensagem de sucesso ao diminuir o limite', () => {
        expect(dadosDaContaBancaria.diminuirLimite()).toMatch('Iremos diminuir o seu limite em R$: 200,00. Seu novo limite é: 0');
    })
    it('Deve retornar a mensagem de sucesso ao desativar o limite', () => {
        expect(dadosDaContaBancaria.pegarDesativarLimite()).toMatch('Seu limite foi desativado com sucesso!');
    })
})