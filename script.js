const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '825f4bff44msh27a895ee4f2c760p15f8e3jsn6b5e42c725ac',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
//jab mujhe get request se data mil gya then not only i will print it on the console
//but i will dynamically populate it on my webapp

//fetch get request  ko ek javascript function bana do
const weatherbatao=(city)=>{

    cityname.innerHTML=city
   



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML=response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML=response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        ws.innerHTML=response.wind_speed


    })
    .catch(err => console.error(err));

}
//buttton ek id dedo
//aur phir button pe add eventlistener 
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    //this function helps to avoid reloading of the webpage after the event listener is begin listened

    weatherbatao(city.value)
})

weatherbatao("Delhi")


const weatherdef=()=>{
    



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            d11.innerHTML = response.temp
            d12.innerHTML = response.cloud_pct
            d13.innerHTML = response.feels_like
            d14.innerHTML = response.humidity
          
            d15.innerHTML = response.max_temp
            d16.innerHTML = response.min_temp
            d17.innerHTML = response.sunrise
            d18.innerHTML = response.sunset
           
            d19.innerHTML = response.wind_degrees
            d20.innerHTML = response.wind_speed
       

        })
        .catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            d21.innerHTML = response.temp
            d22.innerHTML = response.cloud_pct
            d23.innerHTML = response.feels_like
            d24.innerHTML = response.humidity
          
            d25.innerHTML = response.max_temp
            d26.innerHTML = response.min_temp
            d27.innerHTML = response.sunrise
            d28.innerHTML = response.sunset
         
            d29.innerHTML = response.wind_degrees
            d30.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            d31.innerHTML = response.temp
            d32.innerHTML = response.cloud_pct
            d33.innerHTML = response.feels_like
            d34.innerHTML = response.humidity
          
            d35.innerHTML = response.max_temp
            d36.innerHTML = response.min_temp
            d37.innerHTML = response.sunrise
            d38.innerHTML = response.sunset
           
            d39.innerHTML = response.wind_degrees
            d40.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            d41.innerHTML = response.temp
            d42.innerHTML = response.cloud_pct
            d43.innerHTML = response.feels_like
            d44.innerHTML = response.humidity
          
            d45.innerHTML = response.max_temp
            d46.innerHTML = response.min_temp
            d47.innerHTML = response.sunrise
            d48.innerHTML = response.sunset
            d49.innerHTML=response.temp
            d50.innerHTML = response.wind_degrees
            d51.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
   
}
weatherdef()


