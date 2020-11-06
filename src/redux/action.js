import api from './../api/api';

export function weatherForeCast(lat,lon) {
    return {
        type: 'WeatherForecast',
        payload: api.forecast(lat,lon)
    }
}