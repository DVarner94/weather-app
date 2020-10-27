class Weather {
    constructor(city, state) {
        this.apiKey = '393ecd597caf6bb97d30507eafc61b82';
        this.city = city;
        this.state = state;
    }

    // fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);


        const responseData = await response.json();

        return responseData.current_observation;
    }

    // change location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}