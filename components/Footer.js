import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Footer extends Component {
  render(){
    return (
    <View>
      <Text style={styles.text} >Additional Info</Text>
      <View style={styles.container}>
        <Text >Wind <Text>             12m/h</Text> </Text>
        <Text>Humidity <Text>     55%</Text></Text>
      </View>
        <View style={styles.container}>
          <Text>Visibility <Text>        25km</Text> </Text>
          <Text>UV <Text>                   1 </Text> </Text>
        </View>
    </View>
  )
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginRight:40,
    marginVertical:10

  },
  text:{
    fontSize:22,
    textAlign:'left',
    marginVertical:20,
    fontWeight:'900'
  }
})