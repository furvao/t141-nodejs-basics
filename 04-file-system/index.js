const fs = require('fs')

//please do not do this, if you dare do this you are going to lose node.
// const fileContent = fs.readFileSync('./students.txt', 'utf-8')
// console.log(fileContent)
// console.log('sync')

function printFileContent(err, data){
    if(err) {
        console.log('File not found!', err)
        return
    };
    console.log(data)
}


fs.readFile('./students.txt', 'utf-8', printFileContent)
console.log('async')