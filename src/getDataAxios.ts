import axios from "axios";
import { fetchedError, fetchedWeatherData, fetchingWeatherData } from "./reducers/data.slice";

export async function getWeatherData(dispatch:any,country: string){
    dispatch(fetchingWeatherData())
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=a045a1a5356155dc5712ab1318762afa`)
    .then(res=>{
        dispatch(fetchedWeatherData(res.data))
    })
    .catch(err=>{
        dispatch(fetchedError())
        console.log(err)
    })
}