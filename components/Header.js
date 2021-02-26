import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Header extends Component {
  render(){
    return (
    <View >
      <Text style={styles.text}>Weather Forecast</Text>
      <Image source={require('../assets/Weather/sunny.jpg')} style={styles.img} />
      <Text style={styles.tmp_text}> 31,9 </Text>
      <Text style={styles.city_text}>Tbilisi,Georgia</Text>
    </View>
  )
  }
}
const styles = StyleSheet.create({
    text:{
        
        fontSize:24,
        textAlign:'center',
        fontWeight:'bold',
        color:'#333'
    },
    img:{
        width:50,
        height:50,
        alignSelf:'center',
        marginVertical:10
    },
    tmp_text:{
        fontWeight:'900',
        fontSize:38,
        textAlign:'center',
    },
    city_text:{
        fontSize:24,
        textAlign:'center',
        color:'#777'
    }
});