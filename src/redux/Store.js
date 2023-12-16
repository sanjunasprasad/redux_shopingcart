import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlice";

export const Store = configureStore({
     reducer : {
        "Products" :  productReducer
     }
})