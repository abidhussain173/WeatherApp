import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from "./components/Header";
import  Content from "./components/Content";
import  Footer  from "./components/Footer";
export default class App extends Component {
  render(){
    return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
      <StatusBar style="auto" />
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
  },
});
