var request = require('request');
var parseString = require('xml2js').parseString;

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function (error, response, body) {
    parseString(body, function(err,result){
        console.dir(result.rss.channel);
    });
});