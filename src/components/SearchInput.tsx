import { BiSearchAlt } from "react-icons/bi"; 
import { useAppDispatch } from "../store/store";
import { useState } from "react";
import { setCountry } from "../reducers/data.slice";



const SearchInput = () => {
  const dispatch=useAppDispatch()
  const [value,setValue]=useState("")

  function SubmitInputChange(){
    dispatch(setCountry(value))
    setValue('')
  }

  return (
    <div className="flex items-center">
        <div className="relative w-full">
        <input required value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Search..." className="w-full text-[16px] min-w-[300px] border-none font-mont shadow-sm outline-none py-2 rounded-l-full pl-[35px] pr-[10px]"/>
        <BiSearchAlt className="text-[16px] text-gray-800 absolute left-3 top-3"/>
        </div>
        <button onClick={SubmitInputChange} className="py-2 text-[16px] px-[15px] text-blue-500  border-blue-900 border-[0.5px] active:scale-[0.97] bg-white shadow-sm rounded-r-full hover:opacity-90 ">Search</button>
    </div>
  )
}

export default SearchInput