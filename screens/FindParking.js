import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import CountDown from 'react-native-countdown-component';
import Map from "../Components/Maps";
import { useDispatch, useSelector } from 'react-redux';
import { setOTP } from '../slices/navSlices';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();
const FindParking = ({navigation}) => {
  const [finish, setFinish] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [otp,setOtp] = useState(Math.floor(1000 + Math.random() * 9000));
  const dispatch = useDispatch();
  useEffect(() => {
    if (timeLeft === 0) {
      return setTimeLeft(timeLeft);
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleCountdownFinish = () => {
    try {
      // Your logic here when the countdown finishes without an error
      setFinish(true);
      dispatch(setOTP(otp.toString()));
       // Set a timeout for 5 seconds to navigate to 'LeaveParking'
       setTimeout(() => {
        navigation.replace('LeaveParking');
      }, 20000); // 5000 milliseconds = 5 seconds
    } catch (error) {
      // Handle any errors that might occur during the above logic
      console.error('alert:', timeLeft);
    } finally {
      navigation.replace('LeaveParking')
    }
  };
    
  return (
    <View style={tw`h-full`}>
      <View style={tw`h-2/3`}>
        <Map/>
      </View>
      <View style={tw`h-1/3`}>
        <Text style={styles.timerText}>
          Please wait for the timer to confirm your spot
        </Text>
        <Text style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }
        }>{timeLeft}</Text>
 
         
        
        <View style={tw`h-1/3`}>
          <TouchableOpacity disabled={timeLeft !== 0}
           onPress={() => {
            setFinish(true);
            navigation.navigate('LeaveParking');
          }}
          
          >
            {finish ? (
             
              <Text style={styles.finishedText}>Your spot is confirmed!</Text>
            ) : (
              <Text style={styles.generatingText}>Looking for your spot...</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  generatingText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  finishedText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default FindParking;
