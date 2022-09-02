import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type cartProp = {
    productImg:any;
    image:number,
    name:string,
    company:string,
    price:number,
    id:number,
    index?:number,
  }
interface cartState {
    value : cartProp[]
}

const initialState : cartState = {
    value:[],
}

export const cartSlice = createSlice({
    name: 'cartProducts',
    initialState,
    reducers:{
        addProduct: (state, action: PayloadAction<cartProp>)=>{
            state.value.push(action.payload)
        },
        removeProduct:(state,action:PayloadAction<number>) =>{
            state.value.splice(action.payload,1)
        },
        
    }
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer