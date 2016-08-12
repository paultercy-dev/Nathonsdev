$(document).ready(function() {

var weatherAPI = "http://api.wunderground.com/api/72f26e7b1fcceab4/forecast10day/q/CA/Sacramento.json";

var weatherOptions = {
      format: "json"
    };

   function displayWeather(data) {
   		var forecastHTML = '<ul class="weather-bar">';
   		$.each(data.forecast.simpleforecast.forecastday, function(i, forecastday){
   			forecastHTML += '<li class="grid-seventh-day">';
   			forecastHTML += '<div class="grid-full">' + forecastday.date.weekday + '</div>';
   			forecastHTML += '<div class="row">';
   			forecastHTML += '<div class="grid-half">';
   			forecastHTML += '<img src="' + forecastday.icon_url + '">';
   			forecastHTML += '</div>';
   			forecastHTML += '<div class="grid-half">';
   			forecastHTML += '<h3 id="high-temp">High:' +  forecastday.high.fahrenheit + '</h3>';
   			forecastHTML += '<h3 id="low-temp">Low:' +  forecastday.low.fahrenheit + '</h3>';
   			forecastHTML += '</div>';
   			forecastHTML += '</div>';
   			forecastHTML += '</li>';
   			//icon_url
   		});//each loop
   		forecastHTML += '</ul>';
      $('#weather').html(forecastHTML);


   	 //});//cose .each function i weather

   }; // close function display weather 


$.getJSON( weatherAPI, weatherOptions, displayWeather);

});//endy ready doc

