import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice"


export const store = configureStore({
    reducer:{
        cartProducts : cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch