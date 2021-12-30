$("#search-button").on("click",function(){
    var cityValue = $("#search-value").val()
    console.log(cityValue)
fetchWeather(cityValue)

})

function fetchWeather(cityValue) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+ cityValue+"&appid=5f8db01152461d177f677b070504c87e&units=imperial";
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)

var temp = $("<h2>").text("temperature: "+ data.main.temp)
        $("#today").append(temp)
        fetchForecast(data.coord.lat,data.coord.lon)
      })
  }

  function fetchForecast(lat, lon) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/onecall?lat="+ lat+"&lon="+lon+"&appid=5f8db01152461d177f677b070504c87e&units=imperial";
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)
for(var i = 1;i < data.daily.length - 2; i ++){
    var temp = $("<h2>").text("temperature: "+ data.daily[i].temp.day)
        $("#forecast").append(temp)
}

function fetchWind()



      })
  }