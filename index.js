let input = document.querySelector(".search-city")
let image = document.querySelector(".image")
let locationImg1 = document.querySelector(".location1-img")
let weatherType = document.querySelector(".weather-type")
let temperature = document.querySelector(".temperature")
let city = document.querySelector(".city-name")
let wind = document.querySelector(".wind-data")
let humidity = document.querySelector(".humidity-data")
let airPressure = document.querySelector(".pressure-data")
let visibility = document.querySelector(".visibility-data")
let API_Key = "8d552dc41c0619e0529297c4ea2c3c39";

const data = async function(search){
    let getDate = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}&units=metric`)
    console.log(getDate);
    let jsonData = await getDate.json();
    console.log(jsonData);
    
    if(jsonData.cod == 400){
        alert("Please, enter the location");
        image.src = "caution.png";
        jsonData.name = "Please, enter the location";
        temperature.innerHTML = "Temperature";
        weatherType.innerHTML = "Not Found";
        wind.innerHTML = "km/h";
        humidity.innerHTML = "%";
        airPressure.innerHTML = "mBar";
        visibility.innerHTML = "km";
    }

    else if(jsonData.cod == 404){
        alert("Please, enter the right location.")
        image.src = "404.png";
        jsonData.name = "Please, enter the right location";
        temperature.innerHTML = "Temperature";
        weatherType.innerHTML = "Not Found";
        wind.innerHTML = "km/h";
        humidity.innerHTML = "%";
        airPressure.innerHTML = "mBar";
        visibility.innerHTML = "km";
    }
    
    city.innerHTML = jsonData.name;
    temperature.innerHTML = Math.ceil(jsonData.main.temp) + "°C";
    weatherType.innerHTML = jsonData.weather[0].main;
    wind.innerHTML = jsonData.wind.speed + " km/h";
    humidity.innerHTML = jsonData.main.humidity + " %";
    airPressure.innerHTML = jsonData.main.pressure + " mBar";
    visibility.innerHTML = jsonData.visibility/1000 + " km";
    image.innerHTML = jsonData.weather[0].icon;
    
    if(weatherType.innerHTML === jsonData.weather[0].main){
        image.src = `https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`;
    }
    
}
function fun(){
    search=input.value;
    data(search);

  }
  
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      fun();
    }
  });



