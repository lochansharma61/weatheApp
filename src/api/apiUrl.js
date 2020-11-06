function APIURL(){
    return {
        weatherForecast:(lat,lon)=>`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=6cd5904912c5e9d25db76b4afe893a1e`
    }
}
export default APIURL;