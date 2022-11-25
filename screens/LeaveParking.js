import { StyleSheet, Text, View ,TextInput,Button } from 'react-native'
import React from 'react'
import {useState } from 'react'
import { useSelector } from 'react-redux'
import { setDestination } from '../slices/navSlices'
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInformation } from '../slices/navSlices';
import MapView,{Marker,Polygon,Circle} from 'react-native-maps';

import { selectMinDistance } from '../slices/navSlices';
const LeaveParking = () => {
 
  const minDistance=useSelector(selectMinDistance);
 const MinLong=useSelector(selectTravelTimeInformation);
 
  
  console.log(minDistance);

  return (
    <View>
      
     <MapView
      mapType="mutedStandard"
      showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
        
      style={tw`h-2/3`}
      initialRegion={{
        latitude: minDistance,
        longitude:MinLong,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }} 
     >
     <Marker

      coordinate={{ latitude: minDistance, longitude: MinLong }}
    pinColor='purple'
     />
     </MapView>
     <View style={tw`h-1/3`} >
      <TextInput
      placeholder='Enter the 4 digit code'
      style={{borderWidth:2,borderColor:'black',marginTop:20}}/>
      <Button title='submit' onPress={()=>{{/**function to check the code in DB and deallocate space */}}}/>

     </View>
    </View>
  )
}

export default LeaveParking

const styles = StyleSheet.create({})