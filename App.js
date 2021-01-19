import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, ImagePropTypes } from 'react-native';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

export default function App() {

  const[changeText, setText] = useState(false);

  const handlePress = function(){
    setText(!changeText)
  
  }
  
  return (
    <View style={styles.container}>
      <Header title="Blackjack App" />
      

      <View style={styles.body}>
      { changeText === true &&
        <Text>CouCou</Text>
      }
        <Button title={changeText === false ? "Afficher" : "Cacher"} 
        onPress={handlePress}/>
    
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
