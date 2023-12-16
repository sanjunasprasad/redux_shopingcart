import {createSlice} from "reduxjs/toolkit"

const ProductSlice =  createSlice({
    name:"Products",
    initialstate: [],
    reducers:{
        addProduct :(state,action) =>{
            state.push(action.payload)
        }
    }
})

export const {addProduct} = ProductSlice.actions 

export default ProductSlice.reducer