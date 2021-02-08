import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Index from './Index';


export default function App() {
  

  const [component, setComponent] = useState(false);
  
  return (
      <View style={styles.container}>

      <View style={styles.button}>
      <Button title="Start Course" onPress={() =>{
        setComponent(true)
      }} />
      {component === true &&
      <Index/>
      }
      </View>

        <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
    alignItems: 'center',
  },
  button: {
    flex:1,
    position:"absolute",
    top:'50%',
  }

});
