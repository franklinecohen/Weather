$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    
    var markup = "Current weather is: "+ data.currently.temperature + " degrees and " + data.currently.summary.toLowerCase() + ".";
    var markup2 = "The weather tomorrow is: "+ data.daily.data[1].temperatureMax + " degrees and " + data.daily.data[1].summary.toLowerCase();
    var markup3 = "The weather the day after tomorrow: "+ data.daily.data[2].temperatureMax + " degrees and " + data.daily.data[2].summary.toLowerCase();
    var markup4 = "The weather the following day is: "+ data.daily.data[3].temperatureMax + " degrees and " + data.daily.data[3].summary.toLowerCase();
      

    $('.weather-report').html(markup);
    $('.weather-report2').html(markup2);
    $('.weather-report3').html(markup3);
    $('.weather-report4').html(markup4);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});