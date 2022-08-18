// 1 obter um usuario
// 2 numero do usuario telefone a partir do id
// 3 obter o endereco a partir do id

//função callback retorna uma chamada de volta como primeiro parãmetro, ativando a resolução da função, para depois enviar o argumento...
//passando nulo para pular o erro e retornar o usuario
// parãmetro callback sempre na ultima posição e erro sempre na primeira

const util = require('util');
const getAddressAssync = util.promisify(getAddress)

function getUser() { 

    return new Promise(function resolvePromise(resolve, reject){
        // reject(new Error("ixi")) reject para mandar tratar no .catch
        setTimeout(()=>{
            return resolve({
                id:1,
                name: 'Bruno',
                bornDate: new Date(),
            })
        },1000)
    })
     
}

function getPhoneNumber(id) {
    
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                phoneNumber: '99902-4143',
                ddd: 33
            })
        },2000)
    })
}

function getAddress(id,callback){
    
        setTimeout(() => {
            return callback(null,{
                street: 'Açaí',
                neighborhood: 'floresta'
            })
        },2000)
    }

    main()
// 1 passo adicionar async function
    async function main(){
        try{
            const user = await getUser();
            const phoneAndAddress = await Promise.all([
                getAddressAssync(user.id),
                getPhoneNumber(user.id)
            ]);
            const phoneNumber = phoneAndAddress[1];
            const address = phoneAndAddress[0];

            console.log(`
            The user is ${user.name},
            your phone number is (${phoneNumber.ddd}) ${phoneNumber.phoneNumber},
            and your address is:
            neighborhood: ${address.neighborhood}
            street: ${address.street}
            `)
        }
        catch(err){
            console.log('Hard Wrong', err)
        }
    }

// const userPromise = getUser()
// .then captura o resolve, e .catch captura o erro
// userPromise
// .then(user => {
//         return getPhoneNumber(user.id)
//         .then(result => {
//             return {
//                 user: {
//                     name: user.name,
//                     id: user.id
//                 },
//                 phone: result
//             }
//         })

//     }
//     )
// .then(result => getAddressAssync(result.user.id)
//         .then(resultAddress => {
//             return {
//                 user: result.user,
//                 phone: result.phone,
//                 address: {
//                     neighborhood: resultAddress.neighborhood,
//                     street: resultAddress.street
//                 }
//             }
//         })
// )
// .then(result => {
//             console.log(
//             `
//             The user is ${result.user.name},
//             your phone number is (${result.phone.ddd}) ${result.phone.phoneNumber},
//             and your address is:
//             street: ${result.address.street},
//             neighborhood: ${result.address.neighborhood}`
//             )
//         }   
//     )

// .catch(err => console.log('Wrong', err))

// getUser(function resolveUser(error,user){
    //erro como primeiro parãmetro para a função
//     if(error){
//         console.error("erro in user");
//         return;
//     }

//     getPhoneNumber(user.id, function resolvePhoneNumber(error1,phoneNumber){
//         if(error1){
//             console.error("erro in phone number");
//             return;
//         }
//         getAddress(user.id, function resolveAddress(error2,address){
//              if(error2){
//                 console.error("erro in address");
//                 return;
//             }
            // console.log(
            // `
            // The user is ${user.name},
            // your phone number is (${phoneNumber.ddd}) ${phoneNumber.phoneNumber},
            // and your address is:
            // street: ${address.street},
            // neighborhood: ${address.neighborhood} `)
//         })
//     })

// })
// const phoneNumber = getPhoneNumber(id)

// console.log('phone number', phoneNumber)