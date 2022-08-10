const addressForm = document.querySelector('#address-form');
const cepInput = document.querySelector('#cep');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const neighborhoodInput = document.querySelector('#neighborhood');
const regionInput = document.querySelector('#region');
const formInputs = document.querySelectorAll('[data-input]');

const closeButton = document.querySelector('#close-message');
const fadeElement = document.querySelector('#fade');

// Get customer address from API;
const getAddress = async (cep) =>{
    toggleLoader();

    cepInput.blur(); //tira o cursor

    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())

    // show error and reset form
    if(data.erro === "true"){
        if(!addressInput.hasAttribute('disabled')){
            toggleDisabled();
        }

        addressForm.reset();
        toggleLoader();
        toggleMessage('CEP inválido, tente novamente')
        return;
    }

    if(addressInput.value === ""){
        toggleDisabled();
    }
    toggleLoader();

    addressInput.value = data.logradouro;
    cityInput.value = data.localidade;
    neighborhoodInput.value = data.bairro;
    regionInput.value = data.uf;

};

// Add or remove disable attribute
const toggleDisabled = () => {
    if(regionInput.hasAttribute('disabled')){
        formInputs.forEach((input) => {
            input.removeAttribute('disabled');
        });
    }else{
        formInputs.forEach((input) => {
            input.setAttribute('disabled', 'disabled');
        });
    }
};

// Show or hide loader
const toggleLoader = () =>{
    const loaderElement = document.querySelector('#loader');

    fadeElement.classList.toggle('hide');
    loaderElement.classList.toggle('hide')
}

const toggleMessage = (msg) =>{
    const messageElement = document.querySelector('#message');
    
    document.querySelector('#message p').innerText = msg;

    fadeElement.classList.toggle('hide');
    messageElement.classList.toggle('hide')
};

// close message modal
closeButton.addEventListener('click', () => toggleMessage());

// Save address
addressForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    toggleLoader();

    setTimeout(() => {

        toggleLoader();
        toggleMessage('Endereço cadastrado!');
        addressForm.reset();

        toggleDisabled();

    }, 1500)
})

// validade cep input
cepInput.addEventListener('keypress',(e) => {
    const onlyNumbers = /[0-9]/;
    // allow only numbers
    if(!onlyNumbers.test(e.key)){
        e.preventDefault();
        return;
    }
    
});

// Get address event
cepInput.addEventListener('keyup',(e) =>{
    const inputValue = e.target.value

    // check if we have the correct length
    if(inputValue.length === 8){
        getAddress(inputValue);
    }
});

