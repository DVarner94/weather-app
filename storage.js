class Storage {
    constructor(){
        this.city
        this.country
        this.defaultCity = 'Santa Rosa'
        this.defaultState = 'CA'
    }

    getLocationData(){
        localStorage.getItem('city')=== null
            ?(this.city = this.defaultCity) : (this.city = localStorage.getItem('city'))

        localStorage.getItem('state')=== null
            ?(this.state = this.defaultState) : (this.state = localStorage.getItem('state'))

        return {
            city: this.city,
            country: this.country
        } 
    }

    setLocationData(city, country){
        localStorage.setItem('city', city)
        localStorage.setItem('state', state)
    }
}