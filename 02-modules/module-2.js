console.log('module 2')

exports.getName = function() {
    return process.argv[2];
}