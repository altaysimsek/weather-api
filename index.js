const wet = require('./weather');

const weather = new wet('apiKey','cityName');

weather.getWeather(function(callback){
    let agaa = callback;
    console.log(agaa);
})
