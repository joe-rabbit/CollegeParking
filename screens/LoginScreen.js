
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

import { auth } from '../firebase'


const LoginScreen = ({navigation}) => {
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')

    useEffect(()=>{
const unsubscribe = auth.onAuthStateChanged(user =>{
    if(user){
        navigation.replace("Dsce Parking")
    }
})
return unsubscribe
    }, [])
    const handleSignUp=()=>{
auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials=>{
        const user= userCredentials.user;
        console.log(user);

    })
    .catch(error=>alert(error.message))
    }

    const handleLogin=()=>{
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials=>{
            const user= userCredentials.user;
            console.log(user);
    
        })
    }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
      <Text >DSCE Parking </Text>
<TextInput
placeholder='Email'
value={email}
onChangeText={text=>setEmail(text)}
style={styles.input}
/>
<TextInput
placeholder='Password'
value={password}
onChangeText={text=>setPassword(text)}
style={styles.input}
secureTextEntry
/>
      </View>
      <View style={styles.buttonContainer}>
<TouchableOpacity onPress={handleLogin}
style={styles.button}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleSignUp}
style={[styles.button, styles.buttonOutline]}>
<Text style={styles.buttonOutlinetext}>Register</Text>
</TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
inputContainer:{
    width:'80%'
},
input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5,

},
buttonContainer:{
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
},
button:{
    backgroundColor:'#0782F9',
    width:'100%',
    padding:15,
    borderRadius:10,
    alignItems:'center'
},
buttonOutline:{
    backgroundColor:'white',
    marginTop:5,
    borderColor:'#0782F9',
    borderWidth:2
},
buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16
},
buttonOutlinetext:{
    color:'#0782F9',
    fontWeight:'700',
    fontSize:16
}
})
	
