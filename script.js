let weather = {
    apiKey: '6d53bd576ba27728b1f3d3113fb0fdf7',
    fetchWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' 
            + city 
            + '&units=imperial&appid=' 
            + apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main; 
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
    }
};