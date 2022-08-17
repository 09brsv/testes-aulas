const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const name = []

        console.time('for')
        for(i = 0; i < result.results.length; i++){
            const pessoas = result.results[i]
            name.push(pessoas.name)

        }
        console.timeEnd('for')


        console.time('forin')
        for(let i in result.results){
            const pessoas = result.results[i]
            name.push(pessoas.name)
        }
        console.timeEnd('forin')


        
        console.time('forof')
        for(pessoa of result.results){
            name.push(pessoa.name)
        }
        console.timeEnd('forof')
        console.log('Nomes',name)
    }
    catch (err) {
       console.error('erro interno', err) 
    }
}

main()