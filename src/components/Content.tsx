import { FaSpinner } from "react-icons/fa"; 
import { AiFillCompass } from "react-icons/ai";
import { RiCloudWindyLine } from "react-icons/ri";
import { BsFillDropletFill } from "react-icons/bs";
import { CgArrowLongDown } from "react-icons/cg";
import { CgArrowLongUp } from "react-icons/cg";
import { useAppSelector } from "../store/store";

const Content = () => {

  const { data, isLoading } = useAppSelector(state => state.data)

  return (
    <>

      <div className="min-h-[300px] w-full rounded-md font-mont bg-white flex md:flex-row xs:flex-col gap-5 shadow-sm  items-center justify-center p-[20px] font-semibold">
        {
          isLoading ?
            <div className="text-gray-800 font-mont text-[24px] font-semibold flex gap-3 items-center">
              Loading...
              <FaSpinner className="animate-spin inline text-blue-500 text-[18px]"/>
            </div>
            :
            data.length!=0?
            <>
              <div className="flex flex-col gap-2 flex-[1] px-[30px] pb-3 xs:border-b md:border-none">
                <h1 className="text-[24px] text-gray-800 font-semibold">{data[0]?.name}</h1>
                <div className="flex gap-4 items-center">
                  <img src={`https://openweathermap.org/img/wn/${data[0]?.weather[0].icon}@2x.png`} className="w-[100px] h-[100px] object-cover" alt="" />
                  <h1 className="text-[36px] text-blue-900 font-semibold">{data[0]?.main.temp}°C</h1>
                </div>
                <p className="text-[18px] text-gray-800">{data[0]?.weather[0].description}</p>
              </div>
              <div className="flex-[1] flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <p className="flex gap-2 items-center font-semibold">Feels like: <span className="text-[16px] text-blue-500">{data[0]?.main.feels_like}°</span></p>
                  <div className="flex items-center gap-3">
                    <p className="flex gap-2 items-center font-semibold"><CgArrowLongUp className="text-[16px] font-bold text-gray-800" /><span className="text-[16px] text-blue-500">{data[0]?.main.temp_max}°</span></p>
                    <p className="flex gap-2 items-center font-semibold"><CgArrowLongDown className="text-[16px] font-bold text-gray-800" /> <span className="text-[16px] text-blue-500">{data[0]?.main.temp_min}°</span></p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="flex gap-2 items-center font-semibold text-[16px] text-gray-800"><BsFillDropletFill /> Humidity: <span className="text-[16px] text-blue-500">{data[0]?.main.humidity}%</span></p>
                  <p className="flex gap-2 items-center font-semibold text-[16px] text-gray-800"><RiCloudWindyLine /> Wind: <span className="text-[16px] text-blue-500">{data[0]?.wind.speed}</span></p>
                  <p className="flex gap-2 items-center font-semibold text-[16px] text-gray-800"><AiFillCompass /> Pressure: <span className="text-[16px] text-blue-500">{data[0]?.main.pressure} mPa</span></p>
                </div>
              </div>
            </>
            :
            <div className="text-gray-800 font-mont text-[24px] font-semibold">Not found!</div>
        }
      </div>
    </>
  )
}

export default Content