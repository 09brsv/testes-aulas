const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main() {

    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome do herói")
        .option('-p, --poder [value]','Poder do herói')
        .option('-i, --id [value]',"Id do herói")

        .option('-c, --cadastrar', "Cadastrar um herói")
        .option('-l, --listar', "Listar um herói")
        .option('-r, --remover', "Remover um herói por id")
        .option('-a, --atualizar [value]', "Atualizar um herói por id")

        Commander.parse(process.argv)

    const options = Commander.opts()
    const heroi = new Heroi(options)
    try {
        
        if (options.cadastrar) {
            
            delete heroi.id
            const resultado = await Database.cadastrar(heroi)

            if (!resultado) {
                
                return console.error('Herói não foi cadastrado')
            }

            console.log('Herói cadastrado com sucesso')
        }

        if (options.listar) {
            
            const resultado = await Database.listar()

            return console.log(resultado)
        
        }
        if (options.remover) {
            
            const resultado = await Database.remover(heroi.id)

            if (!resultado) {
                
                return console.error('Herói não foi removido')
            }

            console.log('Herói removido com sucesso')
        }
        
        if (options.atualizar) {
            const id = parseInt(options.atualizar)
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            const resultado = await Database.atualizar(id, heroiAtualizar)

            if (!resultado) {
                
                return console.error('Herói não foi atualizado')
            }

            console.log('Herói atualizado com sucesso')
        }
        
    } catch (error) {
        console.error('Deu ruim',error)
    }
}

main()