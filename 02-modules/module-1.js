console.log('module 1');

let encapsulatedVariable = 'Xurupitas'

function sayHello(name = ''){
    console.log(`Hi ${name}`)
}

function getEncapulatedVariable(){
    return encapsulatedVariable;
}

module.exports = {
    sayHello, getEncapulatedVariable
}