
import axios from 'axios';
import React, { Component } from 'react';
import { Text, View ,StyleSheet,ImageBackground,StatusBar,SafeAreaView, Alert} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
export default class IssLocationScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            location:{},
        };
    }
    componentDidMount(){
        this.getIssLocation()
    }
    getIssLocation= ()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response =>{
            this.setState({location:response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    render() {
        return (
            <View style = {styles.container}>
            <SafeAreaView style = {styles.droidSafeArea}/> 
            <ImageBackground source={require("../assets/iss_bg.jpg")} style={styles.backgroundImage}>
            <View style={styles.titleContainer}>
            <Text style={styles.titleText}>ISS Location</Text>
            </View>
            <View style={styles.mapContainer}>
            <MapView 
            style={styles.map}
            region={{
                latitude:this.state.location.latitude,
                longitutde:this.state.location.longitutde,
                latitude:100,
                longitutde:100

            }}>
            </MapView>

            </View>
            </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleText:{
        flex:0.15,
        justifyContent: "center",
        fontWeight:"bold",
        alignItems: "center"
    },
    
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50, 
        marginTop:50, 
        borderRadius:30,
        textAlign:"center",
        backgroundColor:'white'

    },
    routeText:{
       fontSize:35,
       fontWeight:'bold',
       color:'black',
       marginTop:75,
       paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    knowMore:{
       paddingLeft:30,
       color:"red" ,
       fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80
    },
    titleContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center"
    }
});