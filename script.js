// Creating function for cities searched

function createCityList(citySearchList) {
  $("#city-list").empty();

  var keys = Object.keys(citySearchList);
  for (var i = 0; i < keys.length; i++) {
    var cityListEntry = $("<button>");
    cityListEntry.addClass("list-group-item list-group-item-action");

    var splitStr = keys[i].toLowerCase().split(" ");
    for (var j = 0; j < splitStr.length; j++) {
      splitStr[j] =
        splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
    }
    var titleCasedCity = splitStr.join(" ");
    cityListEntry.text(titleCasedCity);

    $("#city-list").append(cityListEntry);
  }
}

// Function for getting the temputure for the cities searched

function populateCityWeather(city, citySearchList) {
  createCityList(citySearchList);

  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=9f76e5a9b2317e732988a80585a9417e&q=" +
    city;

  var queryURL2 =
    "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=9f76e5a9b2317e732988a80585a9417e&q=" +
    city;

  var latitude;

  var longitude;

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    // Store all of the retrieved data inside of an object called "weather"

    .then(function (weather) {}
     
  