import { useEffect } from "react"
import Container from "./components/Container"
import Content from "./components/Content"
import SearchInput from "./components/SearchInput"
import { getWeatherData } from "./getDataAxios"
import {  useAppDispatch, useAppSelector } from "./store/store"

const App = () => {

  const {data,country}=useAppSelector(state=>state.data)
  const dispatch=useAppDispatch()
  useEffect(()=>{
    getWeatherData(dispatch,country)
  },[country])

  console.log(data)

  return (
    <div className="w-full font-mont  min-h-[100vh]  bg-[url('../public/image.jpg')] bg-center bg-no-repeat bg-cover flex justify-center items-center">
      <Container>
        <div className="flex flex-col gap-3">
          <h1 className="text-[36px] text-white">Weather</h1>
          <div className="flex flex-col gap-5 w-full">
            <SearchInput/>
            <Content/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App