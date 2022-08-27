const {
    deepEqual,
    ok
} = require('assert')

const dataBase = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'flash',
    poder: 'speed',
    id: 1
}

describe('Suite de manipulação de heróis', () => {
    before(async() => {
        
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })
    
    it('deve pesquisar um herói, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await dataBase.listar(expected.id); // destructor em resultado para pegar a primeira posição do array
        deepEqual(resultado, expected)
    })

    it('deve cadastrar um herói, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await dataBase.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await dataBase.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(actual, expected)
    })
})
