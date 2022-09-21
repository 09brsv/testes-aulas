const { readFile, writeFile } = require('fs');

const { promisify } = require('util');

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
// outra forma de obter dados json
// const dadosJson = require('./herois.json')

class Database{
    
    NOME_ARQUIVO = 'herois.json';
    
    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
        return JSON.parse(arquivo.toString());
    }

    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));
        return true;
    }

    async cadastrar(herói){
        const dados = await this.obterDadosArquivo();
        const idFiltrado = dados
        const id = herói.id ?? herói.id;
        const heróiComId = {
            id, ...herói
        }

        const dadosFinal = [
            heróiComId,...dados
        ];
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }
    
    async listar(id){
        const dados = await this.obterDadosArquivo();
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true));
        return dadosFiltrados;
    }

    async remover(id){

        if (!id) await this.escreverArquivo([])
        
        const dados = await this.obterDadosArquivo();
        const indice = dados.findIndex(item => item.id === parseInt(id))
        
        if (indice === -1) throw new Error("O usuário não existe")

        dados.splice(indice, 1) 
        
        return await this.escreverArquivo(dados)
    }

    async atualizar(id, modificacoes){

        if (!id) await this.escreverArquivo([])
        
        const dados = await this.obterDadosArquivo();
        const indice = dados.findIndex(item => item.id === parseInt(id))
        
        if (indice === -1) throw new Error("O usuário não existe") 
        
        const objAtualizado = {
            ...dados[indice],
            ...modificacoes
        }

        dados.splice(indice, 1)

        return await this.escreverArquivo([
            ...dados,
            objAtualizado
        ])
    }
}

module.exports = new Database();