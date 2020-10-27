const storage = new Storage()

// get stored location data
const weatherLocation = storage.getLocationData()

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country)

// init ui
const ui = new UI()

// get weather when dom loads
document.addEventListener('DOMContentLoaded', getWeather)

weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err))