const numbers = [1,2,3,'oi',1,true]

let s = sum(numbers)
let m = s / numbers.filter(n => typeof n === 'number').length

document.getElementById('output').innerHTML = `média = ${m}`;