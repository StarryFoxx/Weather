function getWeather(){
    var response = document.querySelector('.weatherResponse').innerHTML;
    var removeResponse = response;
    console.log(response);
    console.log(removeResponse);

    $(".weatherCity").empty();
    $(".weatherDescription").empty();
    $(".weatherType").empty();
    $(".weatherTemp").empty();

    var cityName = $('#cityName').val();
    var apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=3402441ac6d47ba974ee3af8940a579a";
    $.getJSON(apiCall, weatherCallback); //displays the function w/out errors

function weatherCallback(weatherData) {
  var cityName = weatherData.name;
  var country = weatherData.sys.country;
  var description = weatherData.weather[0].description.toUpperCase();


  var k = Math.round(weatherData.main.temp);
  var f = Math.round((9 / 5) * (k - 273) + 32);
  var c = Math.round(( 5 / 9) * (f - 32));

  $('.weatherCity').append(cityName + ", " + country);
  $('.weatherDescription').append(description);
  $('.weatherIcon').append();

  //Capitalize first letter in each word

  $('.weatherType').append(description);

  $('.weatherTemp').append(f + "°" + "F"); //calls farhenheit default

//if else here


} //end weatherCallback

} //end getWeather

//start changeData

  //for now made included strings capitalized due to .toUpperCase() on description variable - around line 19
function changeData(){


  setTimeout(changeData, .1); //timeout allows innerHTML to populate before this function pulls data from it!
  var description = document.querySelector('.weatherType').innerHTML;

  var clear = description.includes("CLEAR"); //clear/sunny
  var cloud = description.includes("CLOUD"); //cloudy
  var rain = description.includes("RAIN"); //rainy
  var snow = description.includes("SNOW"); //snow
  var storm = description.includes("STORM"); //storm

  //  $('.weatherIcon').removeClass();

  //make changes based on weather
  if (clear == true) { //clear/sunny
    $('i').removeClass();
    $('i').addClass('fas fa-sun');
    return;
  } else if (cloud == true) { //cloudy
    $('i').removeClass();
    $('i').addClass('fas fa-cloud');
    return;
  } else if (rain == true) { //raining
    $('i').removeClass();
    $('i').addClass('fas fa-cloud-showers-heavy');
    return;
  } else if (snow == true) { //snowing
    $('i').removeClass();
    $('i').addClass('fas fa-snowflake');
    return;
  } else if (storm == true) { //storming
    $('i  ').removeClass();
    $('i').addClass('fas fa-bolt');
    return;
  } else { //error
    return;
  }


} //end changeData

function  changeTemp(){
  setTimeout(changeTemp, .5);
  var temp = document.querySelector('.weatherTemp').innerHTML;

  if (temp.includes("F")){ //change F to C
    var f = temp;
    var c = Math.round(( 5 / 9) * (f - 32));
    return;
  } else if (temp.includes("C")) { //change C to K
    var c = temp;
    $('.weatherTemp').empty();
    $('.weatherTemp').append(k + "°" + "K");
  } else if (temp.includes("K")) { //change K to F
    var k = temp;
    $('.weatherTemp').empty();
    $('.weatherTemp').append(f + "°" + "F");
  } else

  return;
} //end changeTemp









//run changeData after getWeather
