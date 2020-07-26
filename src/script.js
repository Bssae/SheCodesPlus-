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
    let country=(response.data.sys.country);
    console.log(country)
    
    let temperature = document.querySelector("#currentTemperature");
    let descriptionTemperature=(response.data.weather[0].description);
    temperature.innerHTML = `${locationTemperature}°C and ${descriptionTemperature}`;
    showForecast();
    
  }


  function showForecast(response){
    let city=`${cityChosen.value}`;
    let apiKey = "3eb2bb8176ab9122dc77443192b63f83";
    let apiUrl1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric`;
    console.log(apiUrl1);
    axios.get(`${apiUrl1}&appid=${apiKey}`).then(showMondayForecast);
  }

  function showMondayForecast(response){
    let forecastMondayElement=document.querySelector("#monday");
    let mondayTempMin=Math.round(response.data.list[0].main.temp_min);
    let mondayTempMax=Math.round(response.data.list[0].main.temp_max);
    forecastMondayElement.innerHTML=`<strong>${mondayTempMin}°/${mondayTempMax}°</strong>`;  
    let mondayImage=(response.data.list[0].weather[0].description);
    console.log(mondayImage);
    if (mondayImage=="clear sky","few clouds"){
      document.getElementById('imagetoday').src="src/sun.jpg"}
      else{
    document.getElementById('imagetoday').src="src/run_cloud.jpg"}
    let forecastTuesdayElement=document.querySelector("#tuesday");
    let tuesdayTempMin=Math.round(response.data.list[8].main.temp_min);
    let tuesdayTempMax=Math.round(response.data.list[8].main.temp_max);
    forecastTuesdayElement.innerHTML=`<strong>${tuesdayTempMin}°/${tuesdayTempMax}°</strong>`;
    let tuesdayImage=(response.data.list[8].weather[0].description);
    console.log(tuesdayImage);
    if (tuesdayImage=="clear sky","few clouds"){
      document.getElementById('imageToday1').src="src/sun.jpg"}
      else{
    document.getElementById('imageToday1').src="src/run_cloud.jpg"}
    let forecastWednesdayElement=document.querySelector("#wednesday");
    let wednesdayTempMin=Math.round(response.data.list[16].main.temp_min);
    let wednesdayTempMax=Math.round(response.data.list[16].main.temp_max);
    forecastWednesdayElement.innerHTML=`<strong>${wednesdayTempMin}°/${wednesdayTempMax}°</strong>`;
    let wednesdayImage=(response.data.list[16].weather[0].description);
    console.log(wednesdayImage);
    if (wednesdayImage=="clear sky","few clouds"){
      document.getElementById('imageToday2').src="src/sun.jpg"}
      else{
    document.getElementById('imageToday2').src="src/run_cloud.jpg"}    
    let forecastThursdayElement=document.querySelector("#thursday");
    let thursdayTempMin=Math.round(response.data.list[24].main.temp_min);
    let thursdayTempMax=Math.round(response.data.list[24].main.temp_max);
    forecastThursdayElement.innerHTML=`<strong>${thursdayTempMin}°/${thursdayTempMax}°</strong>`;
    let thursdayImage=(response.data.list[24].weather[0].description);
    console.log(thursdayImage);
    if (wednesdayImage=="clear sky","few clouds"){
      document.getElementById('imageToday3').src="src/sun.jpg"}
      else{
    document.getElementById('imageToday3').src="src/run_cloud.jpg"}      
    let forecastFridayElement=document.querySelector("#friday");
    let fridayTempMin=Math.round(response.data.list[32].main.temp_min);
    let fridayTempMax=Math.round(response.data.list[32].main.temp_max);
    forecastFridayElement.innerHTML=`<strong>${fridayTempMin}°/${fridayTempMax}°</strong>`;
    let fridayImage=(response.data.list[32].weather[0].description);
    console.log(fridayImage);
    if (fridayImage=="clear sky","few clouds"){
      document.getElementById('imageToday4').src="src/sun.jpg"}
      else{
    document.getElementById('imageToday4').src="src/run_cloud.jpg"}
    let forecastSaturdayElement=document.querySelector("#saturday");
    let saturdayTempMin=Math.round(response.data.list[39].main.temp_min);
    let saturdayTempMax=Math.round(response.data.list[39].main.temp_max);
    forecastSaturdayElement.innerHTML=`<strong>${saturdayTempMin}°/${saturdayTempMax}°</strong>`;
    let saturdayImage=(response.data.list[39].weather[0].description);
    console.log(saturdayImage);
    if (saturdayImage=="clear sky","few clouds"){
      document.getElementById('imageToday5').src="src/sun.jpg"}
      else{
    document.getElementById('imageToday5').src="src/run_cloud.jpg"}
    
  }

   
  function showCurrentLocation(position) {
    let apiKey = "3eb2bb8176ab9122dc77443192b63f83";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showCurrentTemperature);
  }
  
  function showCurrentTemperature(response){
    
    let locationTemperature = Math.round(response.data.main.temp);
    let descriptionTemperature=(response.data.weather[0].description);
    let temperature = document.querySelector("#currentTemperature");
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
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Saturday"
  ];
  let currentDayWeek = week[now.getDay()];
  let currentDayWeek1 = week[now.getDay()+1];
  let currentDayWeek2= week[now.getDay()+2];
  let currentDayWeek3= week[now.getDay()+3];
  let currentDayWeek4= week[now.getDay()+4];
  let currentDayWeek5= week[now.getDay()+5];
  


  function updateDay(){
    let correctDay=document.querySelector("#today");
    correctDay.innerHTML=`<h6>${currentDayWeek}</h6>`;
    let correctDay1=document.querySelector("#today1");
    correctDay1.innerHTML=`<h6>${currentDayWeek1}</h6>`;
    let correctDay2=document.querySelector("#today2");
    correctDay2.innerHTML=`<h6>${currentDayWeek2}</h6>`;
    let correctDay3=document.querySelector("#today3");
    correctDay3.innerHTML=`<h6>${currentDayWeek3}</h6>`;
    let correctDay4=document.querySelector("#today4");
    correctDay4.innerHTML=`<h6>${currentDayWeek4}</h6>`;
    let correctDay5=document.querySelector("#today5");
    correctDay5.innerHTML=`<h6>${currentDayWeek5}</h6>`;
  }

  updateDay();

  