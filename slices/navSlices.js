import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  origin: null,
  destination: null,
  minlatitude: null,
  mindistance: null
}

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
    }

  },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setMinDistance } = navSlice.actions;
//Selectors 
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectMinDistance = (state) => state.nav.mindistance;



//call of this 
export default navSlice.reducer;