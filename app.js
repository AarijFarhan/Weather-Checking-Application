const apiKey = "4e1423ff5a8e4870bc435102f5e5259c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.searchBtn button');
let changeImage = document.querySelector('.image')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ` °C`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + ` %`;
    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`;


    if(data.weather[0].main == "Clouds"){
        changeImage.src = "/images/clouds.png"
        
    }
    else if(data.weather[0].main == "Rain"){
        changeImage.src = "/images/rain.png"
        
    }
    else if(data.weather[0].main == "Clear"){
        changeImage.src = "/images/clear.png"
        
    }
    else if(data.weather[0].main == "Snow"){
        changeImage.src = "/images/snow.png"
        
    }
    else if(data.weather[0].main == "Mist"){
        changeImage.src = "/images.mist.png"
        
    }
    else if(data.weather[0].main == "Drizzle"){
        changeImage.src = "/images.drizzle.png"
        
    }

}



searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);

})
