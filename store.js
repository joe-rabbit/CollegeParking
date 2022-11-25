import { configureStore  } from "@reduxjs/toolkit";
import navReducer from './slices/navSlices';
export const store=configureStore({
  reducer: {
    //stores origin and destination 
    nav: navReducer,
  },
})