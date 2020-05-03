function getWeather(){
    var response = document.querySelector('.weatherResponse').innerHTML;
    var removeResponse = response;
    console.log(response);
    console.log(removeResponse);

    $(".weatherResponse").empty();

    var cityName = $('#cityName').val();
    var apiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3402441ac6d47ba974ee3af8940a579a";
    $.getJSON(apiCall, weatherCallback); //displays the function w/out errors

function weatherCallback(weatherData) {
  var cityName = weatherData.name;
  var country = weatherData.sys.country;
  var temp = Math.round(weatherData.main.temp);
  var description = weatherData.weather[0].description;


  $('.weatherResponse').append(cityName + ", " + country + " has " + description + " today! It's " + temp + "!");

  var clear = description.includes("clear"); //clear/sunny
  var cloud = description.includes("cloud"); //cloudy
  var rain = description.includes("rain"); //rainy
  var snow = description.includes("snow"); //snow
  var storm = description.includes("storm"); //storm

  if (clear == true) {
    console.log("sunny");
  } else if (cloud == true) {
    console.log("cloudy");
  } else if (rain == true) {
    console.log("raining");
  } else if (snow == true) {
    console.log("snowing");
  } else if (storm == true) {
    console.log("storming");
  } else {
    console.log("error")
  }


}
}
