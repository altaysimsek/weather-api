const wet = require('./weather');

const weather = new wet('e97d11246886d2de03003417b6d369c4');

weather.getWeather(function(callback){
    let agaa = callback;
    console.log(agaa);
})
