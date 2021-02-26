import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from "./parts/Card";
export default class Content extends Component {
  render(){
    return (
    <View style={styles.container}>
      <Card   img={require('../assets/Weather/rainy.png')}   bgcolor="orange" color1="orange" color2="pink"
        style={{ borderTopLeftRadius:70 }} /> 
      <Card img={require('../assets/Weather/sunny.jpg')}  color1="hotpink" color2="purple" />
      <Card img={require('../assets/Weather/moon.png')}  bgcolor="lightgreen" color1="lightblue" color2="lightgreen"   style={{ borderBottomRightRadius:70 }} />  
    </View>
  )
  }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
})