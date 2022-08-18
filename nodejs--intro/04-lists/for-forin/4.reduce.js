const {obterPessoas} = require('./service')

Array.prototype.meuReduce = function(callback,valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    // se passou valor inicial, valor vai começar com o valor setado, se nao, vai pegar o valor do array na primeira posição
    for(let i = 0; i <= this.length -1; i++) {
        valorFinal = callback(valorFinal, this[i], this)

    }
    return valorFinal
}

async function main() {

    try {
        
        const { results } = await obterPessoas('a')
        const pesos = results.map( item => parseInt(item.height))
        console.log(pesos)
        // const total = pesos.reduce((anterior,proximo) => anterior + proximo, 0)
       

        const minhaLista = [
            ['br', 'un'],
            ['o', 'é']
        ]

        const total = minhaLista.meuReduce((anterior,proximo) => anterior.concat(proximo), []).join(',')

         console.log('total', total)

    } catch (error) {
        console.error("ERRADO", error)
    }
}

main()