const args = process.argv.slice(2);

/*

function print(value, index){
    console.log('%s: %s', index, value);
}

args.forEach(print)

*/

function getName() {
    return process.argv[2];
}

function sayHello(name = ''){
    //console.log('Hello %s', name);
    console.log(`Hello ${name}`);
}


sayHello(getName());

console.log('---> Hi ' + args[0]);




