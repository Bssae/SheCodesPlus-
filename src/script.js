function showCity(event) {
    event.preventDefault();
    let cityChosen = document.querySelector("#cityChosen");
    
    let currentCity = document.querySelector("#currentCity");
    currentCity.innerHTML = `${cityChosen.value.toUpperCase().trim()}`;
    let currentDay = document.querySelector("#currentDay");
    currentDay.innerHTML = `Last update on  ${currentDayWeek} ${hour}:${minutes}h`;
    showTemperature();
  }
  
  let clickButton = document.querySelector("#buttonWorld");
  clickButton.addEventListener("click", showCity);
  
  function showTemperature(response) {
    let city = `${cityChosen.value}`;
    let apiKey = "3eb2bb8176ab9122dc77443192b63f83";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    console.log(apiUrl);
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showCityTemperature);
  }
  
  function showCityTemperature(response) {
    let locationTemperature = Math.round(response.data.main.temp);
    let temperature = document.querySelector("#temperature");
    let descriptionTemperature=(response.data.weather[0].description);
    temperature.innerHTML = `${locationTemperature}°C and ${descriptionTemperature}`;
  }
  
  function showCurrentLocation(position) {
    let apiKey = "3eb2bb8176ab9122dc77443192b63f83";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showCurrentTemperature);
  }
  
  function showCurrentTemperature(response) {
    console.log(response.data.name);
    let locationTemperature = Math.round(response.data.main.temp);
    let descriptionTemperature=(response.data.weather[0].description);
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${locationTemperature}°C and ${descriptionTemperature}` ;
    let location = response.data.name;
    location=location.toUpperCase().trim();    
    currentCity.innerHTML = document.querySelector("currentCity");
    currentCity.innerHTML = `${location}`;
    let currentDay = document.querySelector("#currentDay");
    currentDay.innerHTML = `Last update on ${currentDayWeek} ${hour}:${minutes}h`;
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
  }
  let clickCurrentButton = document.querySelector("#buttonCurrentLocation");
  clickCurrentButton.addEventListener("click", getCurrentPosition);
  
  let now = new Date();
  
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDayWeek = week[now.getDay()];
  