import { create } from 'apisauce';
import APIURL from './apiUrl';


const api = create({
  })

  const API = {
      forecast : (lat,lon)=>{
          return api.get(APIURL().weatherForecast(lat,lon)).then(response =>{
              return response
          })
          .catch(error => {
              return error;
          })
      }
  }
  export default API;