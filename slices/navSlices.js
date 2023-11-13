import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: {
    location: {
      lat: 12.909189673007594,
      lng: 77.5665551,
    },
  },
  destination: null,
  minlatitude: null,
  mindistance: null,
  otp:0,
};


 export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin(state,action){
      state.origin = action.payload;
    },
    setDestination(state,action){
      state.destination = action.payload;
    },
    setTravelTimeInformation(state,action){
      state.travelTimeInformation = action.payload;
    },
    setMinDistance(state,action){
      state.mindistance = action.payload;
    },
    setOTP(state,action){
      state.otp = action.payload;
    },

  },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setMinDistance,setOTP } = navSlice.actions;
//Selectors 
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectMinDistance = (state) => state.nav.mindistance;
export const selectOTP = (state) => state.nav.otp;



//call of this 
export default navSlice.reducer;