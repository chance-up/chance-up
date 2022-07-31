let fs = require('fs')

module.exports.someFunction = function () {
    console.log('hi');
    fs.writeFileSync('test.txt', 'hi')
};

// todo 1. 글꼴 및 색상 적용
// todo 2. 자동화 스크립트 작성
// todo 3. 어떤 정보를 뿌려줄지?
// todo 4. git action test


