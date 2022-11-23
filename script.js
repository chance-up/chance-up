const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const LONGITUDE = '127.02861';
const LATITUDE = '37.26389';
const UNITS = 'imperial';
const WEATHER_ICON = {
  '01d': '☀️',
  '02d': '⛅️',
  '03d': '☁️',
  '04d': '☁️',
  '09d': '🌧',
  '10d': '🌦',
  '11d': '🌩',
  '13d': '❄️',
  '50d': '🌫',
};
const WEEK_DAY = {
  0: 'Sunday!🥲',
  1: 'Monday!😂',
  2: 'Tuesday!🤔',
  3: 'Wednesday!🫢',
  4: 'Thursday!😀',
  5: 'Friday!😄',
  6: 'Saturday!😆',
};
const https = require('https');
let fs = require('fs');

module.exports.getWhether = function () {
  console.log('cccccc', WEATHER_API_KEY);
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&units=${UNITS}&appid=${WEATHER_API_KEY}`;

  https.get(url, (res) => {
    var chunks = '';
    res.on('data', function (chunk) {
      chunks += chunk;
    });
    res.on('end', function () {
      replaceFileData(JSON.parse(chunks));
    });
  });
};

replaceFileData = function (whetherData) {
  fs.readFile('chat_template.svg', 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
      return;
    }

    data = data.replace('{fTemp}', whetherData.main.temp.toFixed(0));
    data = data.replace('{cTemp}', (((whetherData.main.temp - 32) * 5) / 9).toFixed(0));
    data = data.replace('{weatherIcon}', WEATHER_ICON[whetherData.weather[0].icon]);
    data = data.replace('{weekDay}', WEEK_DAY[new Date().getDay()]);

    console.log('debug - weatherIcon', whetherData.weather[0].icon);
    console.log('debug - weekday', new Date().getDay());
    console.log('debug - weekday', new Date());

    data = fs.writeFile('chatting.svg', data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};
