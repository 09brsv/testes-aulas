const service = require('./service')

async function main() {
    try {
        
        const result = await service.obterPessoas('a');

        console.time('each')
        const pessoas = []
        result.results.forEach(result => pessoas.push(result.name))
        console.log(pessoas)

        console.timeEnd('each')

        console.time('map')
        const names = result.results.map(results => results.name)
        console.log(names)
        
        console.timeEnd('map')

    } catch (error) {

        console.error('ERRADO',error)

    }
}

main()