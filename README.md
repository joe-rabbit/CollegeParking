# CollegeParking
Real-time parking system for our college using React Native(ExpoGo) and Firebase.
# Application
A faster and more efficient way to park at college. Using React Native, I designed a mobile application that allows staff and students to park their vehicles at ease. The application sets a 20-second timer as soon as the user enters the parking lot once the user enters the parking lot. The closest parking spot is assigned to the user. A unique key is stored against the username. The spot gets assigned to the user, and the tagged spot is assigned to the user. Once the user leaves the parking spot, the person confirms by clicking a button, the spot is deallocated and set green for all users. In case all spots are occupied, a push notification is sent to all users.
# Collaborate
Feel free to develop this project.
# UI/UX 
The first image is the find parking image, the timer is set to 0, and the spot becomes available. The image below is the home screen image.
### Find Parking Screen
![Find Parking Screen](https://github.com/jo780-full/CollegeParking/assets/84071740/5b690abb-fc71-4e34-9041-3dfdf1f9842b)
### Home Screen
![Home Screen](https://github.com/jo780-full/CollegeParking/assets/84071740/a0f8ca28-23bd-4079-ae98-5b253232f7a6)

# Installation 
Clone the repository and then run
```bash
yarn install
```
To run the application
```bash
npx expo start
npx expo start --tunnel
```
replace your Firebase credential and google Maps API credentials in the firebase.js and the .env files respectively.
