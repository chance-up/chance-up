const WEATHER_API_KEY = process.env.WEATHER_API_KEY

let fs = require('fs')
let weather = require('openweather-apis')

weather.setLang('en')
weather.setCoordinate(37.517235, 127.047325)
weather.setUnits('imperial')
weather.setAPPID(WEATHER_API_KEY)

module.exports.someFunction = function () {
    console.log('hi');
    console.log(process.env.WEATHER_API_KEY);


    fs.writeFileSync('test.txt', 'hi')
};

// todo 1. 글꼴 및 색상 적용
// todo 2. 자동화 스크립트 작성
// todo 3. 어떤 정보를 뿌려줄지?
// todo 4. git action test


