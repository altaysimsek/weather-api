const xhr = require('request');
//const url = 'http://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=e97d11246886d2de03003417b6d369c4&units=metric';
module.exports = class Weather{
    
    constructor(apiKey,city) {
        this.apiKey = apiKey
        this.city = city
        this.url = "http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid="+this.apiKey+"&units=metric"
        
    }
    getWeather(callback){
        xhr({
            url:this.url,
            json:true
        },function(err,response,body){
            if(err){
                callback("Hava durumu alınamadı");
            }else{
                //Shows cityname{body.name} and temperature{body.main.temp} 
                callback(body.name +"'da hava "+body.main.temp+" derece.");
            }
        }
        );
    };
    

}
















/*function(callback){
    
    xhr({
        url:url,
        json:true
    },function(err,response,body){
        if(err){
            callback("Hava durumu alınamadı");
        }else{
            callback(body.name +"'da hava "+body.main.temp+" derece.");
        }
    }
    );
};*/