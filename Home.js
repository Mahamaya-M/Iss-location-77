import { StatusBar} from 'expo-status-bar';
import React, { Component } from 'react';
import {
   
    Text,
    View,
    SafeAreaView,
    Platform,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image
   
   
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return ( 
            <View style = {styles.container} >
            <SafeAreaView style = {styles.droidSafeArea}/> 
            <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
            <View style={styles.titleText}>
            <Text style={styles.titleText}>ISS Tracker</Text>
            </View>

            <TouchableOpacity style={styles.routeCard} onPress={()=>
            this.props.navigation.navigate("IssLocation")
        }>
            <Text style={styles.routeText}> Iss IssLocation</Text>
            <Text style={styles.knowMore}>{"know more ---->"}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard} onPress={()=>
            this.props.navigation.navigate("Meteors")}>
            <Text style={styles.routeText}> Meteors</Text>
            <Text style={styles.knowMore}>{"know more ---->"}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
           
            </TouchableOpacity>
            </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    titleText:{
        flex:0.15,
        justifyContent: "center",
        fontWeight:"bold",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS==="android"?StatusBar.currentHeight:0
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
    }
});