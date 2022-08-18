const {obterPessoas} = require('./service')
// extrai somente a constante ou o objeto que foi indicado(a)

Array.prototype.meuFilter = function(callback) {
    const lista = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, '', null, undefined => false
        if(!result) continue;
        lista.push(item);
    }
    return lista;
}

async function main() {
    try {
        const { results } = await obterPessoas('a')  

        const familiaLars = results.filter(result => {
            // retorna um booleano por padrao
            // pra informar se mantem na nova lista ou remove
            // false => remove
            // true => mantem
            // se nao encontrou = resultado é -1
            const arrayFiltrado = result.name.toLowerCase().indexOf('lars') !== -1
            return arrayFiltrado
        })

        const familiaLarsDois = results.meuFilter((result, index, lista) => {
            console.log(`index: [${index}]`, lista.length)

            return result.name.toLowerCase().indexOf('lars') !== -1
            
        })

        const names = familiaLarsDois.map(pessoa => pessoa.name)

        console.log(names)

    } catch (error) {
        console.error('ERRADO',error)

    }
}

main()
