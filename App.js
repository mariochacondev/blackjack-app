import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import Course from './component/Course';



export default function App() {

  
  const [ idCourse, setIdCourse ] = useState(1);

  
  return (
    
      <View style={styles.container}>
      <Course id={idCourse} setId={setIdCourse} />

        <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
  },

});
