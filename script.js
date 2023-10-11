const apikey = "a442f4114f454ae28d583752231010"

const auto = document.getElementById('get-location')
const button = document.getElementById("searchbutton");
const city = document.getElementById("cityInput");

city.focus()

const cityname = document.getElementById("cityname");
const temp = document.getElementById("temp");
const dateandtime = document.getElementById("dateandtime");
const realfeel = document.getElementById("realfeel");



async function weather(cityName){
  
    const promise =  await fetch(
        `https://api.weatherapi.com/v1/current.json?key=a442f4114f454ae28d583752231010&q=${cityName}&aqi=no`
        
        
    );

    return await promise.json();
}

function  fetchWeatherhelper(event){
    fetchWeather(event)
}


const fetchWeather =  async (event)=>{
      const cityLongitude = event.coords.longitude;
      const cityLatitude = event.coords.latitude
     // console.log(cityLatitude, cityLongitude);
     
      
      const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=a442f4114f454ae28d583752231010&q=${cityLatitude}, ${cityLongitude} &aqi=no`
      )
      const details = await promise.json();
      renderDetails(details);
}

function someError(){
    console.log("Some error Ocurred, please try again or you might have not given location acess.")
}

auto.addEventListener('click', ()=>{
   const result = navigator.geolocation.getCurrentPosition((fetchWeatherhelper), (someError))
})




button.addEventListener('click', async (event)=>{
    console.log(city.value);
    const value = city.value;
    const result = await weather(value);
   
    
    console.log(result);
    console.log(result.current.condition.text)

    renderDetails(result)

   
})

const renderDetails = (result)=>{
    cityname.innerText =` ${result.location.name}, ${result.location.region} - ${result.location.country}`
    temp.innerText  = `${result.current.feelslike_c}`;
    realfeel.innerText= `${result.current.condition.text}`
    dateandtime.innerText = `${result.location.localtime.split(' ')[1]}`
   

}





//https://api.weatherapi.com/v1/current.json?key=a442f4114f454ae28d583752231010&q=Bhagalpur&aqi=no
