

import { StyleSheet, Image, View,Text,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import NavOptions from '../Components/NavOptions';
import tw from "tailwind-react-native-classnames";
import { useDispatch } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {setDestination,setOrigin} from "../slices/navSlices";
const HomeScreen = () => {
  const dispatch=useDispatch();


  return (
    <SafeAreaView style={[tw`bg-gray-200 h-full`]}>
<View style={tw`p-5`
}> 

  <Text style={tw`text-2xl font-bold p-5 `}>DSCE Parking </Text>
  <GooglePlacesAutocomplete
                        placeholder='Search destination'
                        styles={{

                                container:{ 
                                    flex:0,
                                },
                                textInput:{
                                    fontSize:18,

                                 } }}
                                 fetchDetails={true}
                                 returnKeyType={"search"}
                                 enablePoweredByContainer={false}
                        minLength={2}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data,details);
                            dispatch(setOrigin({
                                location:details.geometry.location,
                                description:data.description,
                            }))
                            dispatch(setDestination(null))
                        }}
                        query={{
                            key:GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}


                    />

  <NavOptions/>



</View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'purple'
  }
})
// 