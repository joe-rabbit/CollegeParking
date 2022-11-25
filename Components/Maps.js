import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import * as Location from 'expo-location';
import MapView,{Marker,Polygon,Circle} from 'react-native-maps';
import { useSelector } from 'react-redux';
import {setMinDistance} from '../slices/navSlices'
import { useDispatch } from 'react-redux';
import { setTravelTimeInformation } from '../slices/navSlices';
import { selectOrigin } from '../slices/navSlices';
import {getPreciseDistance} from 'geolib';
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      latitude: 0,
      longitude: 0,
      user_latitude:0,
      user_longitude:0,
      error: null,
      locations:0,
reduxState:{
  latitude: 0,
  longitude: 0,}
    };
  }
    componentDidMount() {
          fetch('https://gist.githubusercontent.com/jo780-full/c42f65154fac8d3d6e495326211e15b7/raw/b8db40d3c4afaaa254e02c4407caa32ef59c47ce/student.json',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }

      })
      .then(res => res.json())
      .then(data => {
        this.setState({ reports: data.report })
      })
      .catch(console.error)
      let { status } =  Location.requestForegroundPermissionsAsync().then(
        (status) => {
          if (status !== 'granted') {
            this.setState({
            locations: location
            });
          }
        }  )
      Location.getCurrentPositionAsync({}).then(
        (location) => {
          this.setState({ 
            user_latitude: location.coords.latitude,
            user_longitude: location.coords.longitude,
            error: null,

           });
        }
      )
      Location.watchPositionAsync({distanceInterval:1},(location) => {
        this.setState({ 
          user_latitude: location.coords.latitude,
          user_longitude: location.coords.longitude,
          error: null,

         });
      }
      )
  }
calculateMinDistance=()=>{
  const dispatch=useDispatch();
  let min_dist = Number.MAX_VALUE;
  let min_latitude = 0
  let min_longitude = 0
  for(const element in this.state.reports)
  { 
    const distance=Math.min(getPreciseDistance(
      {latitude:this.state.user_latitude,longitude:this.state.user_longitude},
      {latitude:this.state.reports[element].latitude,longitude:this.state.reports[element].longitude}
    ))
    if(distance<min_dist)
    {
      min_dist=distance;
      min_latitude=this.state.reports[element].latitude;
      min_longitude=this.state.reports[element].longitude;
    }
    dispatch(setMinDistance(min_latitude));
    dispatch(setTravelTimeInformation(min_longitude));
  }
  return(
    <Circle
    center={{latitude:min_latitude,longitude:min_longitude}}
    radius={2}
    strokeWidth={1}
    strokeColor="red"
    fillColor="rgba(255,0,0,2)"
    />
  )
}
  mapMarkers = () => {

    return this.state.reports.map((report) => 

    <Circle
      key={report.id}

      center={{ latitude: report.latitude, longitude: report.longitude }}
      radius={1}
      strokeWidth={1}
      strokeColor="green"
      fillColor="rgba(0,255,0,0.5)"
    />

    )

  }

 MapWrapper = ()=>{
  const origin =useSelector(selectOrigin);
  return (

    <MapView    
    mapType="mutedStandard"
    showsUserLocation={true}
        followUserLocation={true}
        zoomEnabled={true}
    style={tw`h-full w-full`}
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} 
    ref = {ref=>this.map=ref}
  >
    <Marker
      coordinate={{ latitude: origin.location.lat, longitude: origin.location.lng }}


    />
    {this.mapMarkers()}
    {this.calculateMinDistance()}
    <Marker
    coordinate={{
      latitude: this.state.user_latitude,
      longitude: this.state.user_longitude,
    }}
    title={"Your Location"}
    description={"You are here"}

      pinColor='blue'
      />


   {/*student area*/}
    <Polygon
    coordinates={[
      { latitude: 12.908764862118488,   longitude: 77.56763368009942 },
      { latitude: 12.909351220825277,longitude:  77.56756522139399 },
      { latitude: 12.909496879375817,longitude:  77.56763847998074 },
      {latitude:12.909506790161094,longitude: 77.56779777527214},
      {latitude:12.909333117614427, longitude:77.56856604008081},
      {latitude:12.909124598612156,longitude: 77.56852690728837},
      { latitude: 12.909385294896701,  longitude: 77.5681230870149, },
      {latitude:12.909061025711033, longitude:77.5681799298621},
      {latitude:12.909050854045336,longitude:  77.56815645018665},
      { latitude:12.90868749725228, longitude: 77.56800790948633},
      { latitude: 12.908710622492181 , longitude: 77.56762153367315 },


    ]}
    fillColor="rgba(255, 0, 0, 0.1)"
    strokeColor="rgba(255, 0, 0, 0.5)" // fallback for when `strokeColors` is not supported by the map-provider
    strokeColors={[
      '#7F0000',
      '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
      '#B24112',
      '#E5845C',
      '#238C23',
      '#7F0000'
    ]}
    strokeWidth={1}
  />
   <Polygon
    coordinates={[
      { latitude: 12.909394643253528,longitude:   77.56614422503371 },
      { latitude: 12.909456079146613, longitude:  77.56582255987011 },
{ latitude:12.90941582804595,longitude: 77.56577909160477},
{latitude:12.90938405085663, longitude:77.56579213208437},
{ latitude:12.909368162260469, longitude:77.56582255987011},
{latitude:12.90934168126461,longitude: 77.56586602813547},
{ latitude:12.908920103432747, longitude:77.56579430549765},
{latitude:12.908892563147631, longitude:77.56606489544944}
    ]}
    fillColor="rgba(0, 255, 0, 0.1)"
    strokeColor="rgba(0, 255, 0, 0.5)" // fallback for when `strokeColors` is not supported by the map-provider
    strokeColors={[
      '#7F0000',
      '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
      '#B24112',
      '#E5845C',
      '#238C23',
      '#7F0000'
    ]}
    strokeWidth={1}
  />
  {/*Hospital  */}
     <Polygon
    coordinates={[
      { latitude:12.908518776874924,longitude:  77.56518322273905 },
      { latitude: 12.908724009086619,  longitude: 77.56522814973901 },
      { latitude:12.908739042012709,  longitude: 77.56516914114205 },
      { latitude: 12.908535770631334  ,longitude:   77.56512287303762},
    ]}
    fillColor="rgba(0, 0, 255, 0.1)"
    strokeColor="rgba(0, 0, 255, 0.5)" // fallback for when `strokeColors` is not supported by the map-provider

    strokeColors={[
      '#7F0000',
      '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
      '#B24112',
      '#E5845C',
      '#238C23',
      '#7F0000'
    ]}
    strokeWidth={2}
  />
  {/*Vip Parking */}
   <Polygon
    coordinates={[
      { latitude:12.909451264916404, longitude:  77.5669158882026 },

      { latitude: 12.909262624852568,  longitude:  77.56687637127314 },

      { latitude: 12.90931398237095 ,longitude: 77.56748432403379},

      { latitude:12.909400895070368, longitude:  77.56744784686815 },
      {latitude:12.909426457234511, longitude:77.56698467532628},

    ]}
    fillColor="rgba(255, 255, 50, 0.3)"
    strokeColor="rgba(255, 255, 0, 0.6)"// fallback for when `strokeColors` is not supported by the map-provider
    strokeColors={[
      '#7F0000',
      '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
      '#B24112',
      '#E5845C',
      '#238C23',
      '#7F0000'
    ]}
    strokeWidth={2}
  />

  </MapView>

  );


  };







  render() {



  return (
    <this.MapWrapper/>
  )
}
}
export default  Map

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

})
