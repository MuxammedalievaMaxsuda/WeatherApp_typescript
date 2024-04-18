import { WeatherTypes } from "../interfaces/WeatherTypes"
import { createSlice ,PayloadAction} from "@reduxjs/toolkit/react"

type DataType={
    data: WeatherTypes[]
    country: string
    isLoading: boolean
}

const initialState:DataType={
    data: [],
    country: 'Nukus',
    isLoading: false
}

const dataSlice=createSlice({
    name: 'weatherData',
    initialState,
    reducers:{
        fetchingWeatherData(state){
            state.isLoading=true
        },
        fetchedWeatherData(state,action:PayloadAction<WeatherTypes>){
            state.isLoading=false
            state.data=[]
            state.data=[...state.data,action.payload]
        },
        fetchedError(state){
            state.isLoading=false
        },
        setCountry(state,action:PayloadAction<string>){
            state.country=action.payload
        }
    }

})

export const {fetchingWeatherData,fetchedWeatherData,fetchedError,setCountry}=dataSlice.actions
export default dataSlice.reducer
