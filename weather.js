const apiKey = "8cc2521e651aafe250c3e09cddc90a2d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();
        const searchBox = document.querySelector(".search input");
        const searchBtn= document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.arc = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
    }
    const searchBtn= document.querySelector(".search button");
    searchBtn.addEventListener("click", () => {
        const city = document.querySelector(".search input").value;
        checkWeather(city);
    });