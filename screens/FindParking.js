import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import Map from "../Components/Maps";
import {useDispatch} from 'react-redux';
import {useEffect} from "react"
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FindParking = () => {
const dispatch=useDispatch()
  const [timeLeft, setTimeLeft]=useState(
    20
    

  
)
  useEffect(() =>
  {
    if (timeLeft == 0) 
    {
      return setTimeLeft(timeLeft);
}

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft])
  return (
    <View style={tw`h-full`}>
      <View style={tw`h-2/3`}>
        <Map/>
      </View>
      <View style={tw`h-1/3`}>
        <Text>FindParking</Text>
        <Text>{timeLeft}</Text>
        <View style={tw`h-1/3`}>
         <TouchableOpacity 
          disabled={timeLeft!=0}>
         <Button
        
         title='generating Your OTP...' color='black' />
<RandomGenerator/>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )


} 
const RandomGenerator = () =>{
  // setTimeLeft(timeLeft.otp=Math.floor(1000+Math.random()*9000));
  let otp=Math.floor(1000+Math.random()*9000)
  return(
    <Text>{otp}</Text>
  )
}

export default FindParking
const styles = StyleSheet.create({})