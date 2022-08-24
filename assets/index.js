var button = document.getElementById('button');
var search = document.getElementById('search');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f70ec10d0mshb56b0adfece8d42p1746f8jsn51a2dfd4690a',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

button.addEventListener('click', function(event) {
    event.preventDefault;
    console.log(search.value);
    fetch(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${search.value}/summary/`, options)
	.then(response => response.json())
	.then(function(response){
        const forecast = response.forecast;
        const div = document.getElementById('div');
        let temperature = forecast.items[0].temperature.min;
        let wind = forecast.items[0].wind.min;
        let prec = forecast.items[0].prec.probability;
        var cityname = document.getElementById('cityname');
        var temp = document.getElementById('temperature');
        var windy = document.getElementById('wind');
        var rain = document.getElementById('prec');
        cityname.textContent = search.value;
        temp.textContent = `Temperature: ${temperature} C`;
        windy.textContent = `Wind: ${wind} %`;
        rain.textContent = `Precipitation: ${prec} %`;
    })
});

