const initialState = {
    weatherData:[]
};

const weatherReducer=(state=initialState, action)=>{
    switch (action.type) {
        case 'WeatherForecast':{
            console.log("action",action);
            if(action.payload.status==200) {
                console.log("action.res",action.res)
                let weatherData=[]
                weatherData=action.payload.data.daily
                return {
                    ...state, weatherData
                };
            }else{
                console.log("resAction");
                return { ...state}
            }
        }
        default:{
            return {
                ...state,
            };
        }
    }
}
export default weatherReducer