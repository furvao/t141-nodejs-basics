const module1 = require('./module-1')
const module2 = require('./module-2')


console.log('Main module')


console.log(module1.getEncapulatedVariable())
module1.sayHello(module2.getName());