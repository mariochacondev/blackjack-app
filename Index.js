import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Course from './component/Course';
import Fiche from './component/Fiche';

export default function Index() {
  



    const [ idFiche, setIdFiche ] = useState(undefined);
    const [ idCourse, setIdCourse ] = useState(1);
  
    
    return (
        <View style={styles.container}>
  
        {idCourse !== undefined &&
        <Course id={idCourse} setId={setIdCourse} setIdFiche={setIdFiche} />
        }
  
        {idFiche !== undefined &&
        <Fiche id={idFiche} setId={setIdFiche} />
        }
  
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