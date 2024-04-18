import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers/data.slice";
import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux'

export const store=configureStore({
    reducer:{
        data: dataSlice
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;