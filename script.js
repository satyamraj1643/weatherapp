const apikey = "a442f4114f454ae28d583752231010"

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
button.addEventListener('click', async (event)=>{
    console.log(city.value);
    const value = city.value;
    const result = await weather(value);
    
    console.log(result);
    console.log(result.current.condition.text)

    cityname.innerText =` ${result.location.name}, ${result.location.region} - ${result.location.country}`
    temp.innerText  = `${result.current.feelslike_c}`;
    realfeel.innerText= `${result.current.condition.text}`
    dateandtime.innerText = `${result.location.localtime.split(' ')[1]}`
   
})





//https://api.weatherapi.com/v1/current.json?key=a442f4114f454ae28d583752231010&q=Bhagalpur&aqi=no
