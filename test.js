let fs = require('fs')

module.exports.someFunction = function () {
    console.log('hi');
    fs.writeFileSync('test.txt', 'hi')
};

