const {
    deepEqual
} = require('assert')

const dataBase = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'flash',
    poder: 'speed',
    id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'lanterna verde',
    poder: 'energia do anel',
    id: 2
}

describe('Suite de manipulação de heróis', () => {
    before(async() => {
        
        await dataBase.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await dataBase.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })
    
    it('deve pesquisar um herói, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await dataBase.listar(expected.id); // destructor em resultado para pegar a primeira posição do array
        deepEqual(resultado, expected)
    })

    it('deve cadastrar um herói, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [actual] = await dataBase.listar(DEFAULT_ITEM_CADASTRAR.id)
        await dataBase.cadastrar(expected)
        deepEqual(actual, expected)
    })

    it('deve remover um item por id', async () => {
        const expected = true;
        const resultado = await dataBase.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

    it('deve atualizar um item por id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'batman',
            poder: 'dinheiro'
        }
        const novoHeroi = {
            nome: 'batman',
            poder: 'dinheiro'
        }
        await dataBase.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoHeroi)
        const [resultado] = await dataBase.listar(DEFAULT_ITEM_ATUALIZAR.id)
        
        deepEqual(resultado, expected)
    })
})
