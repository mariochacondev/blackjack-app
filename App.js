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
  const[changeText2, setText2] = useState(false);

  const handlePress2 = function(){
    setText2(!changeText2)
  
  }
  const[changeText3, setText3] = useState(false);

  const handlePress3 = function(){
    setText3(!changeText3)
  
  }
  
  
  return (
    <View style={styles.container}>
      <Header title="Blackjack App" />
      

      <View style={styles.body}>

      <Navbar />


      { changeText === true &&
        <Text>Page1</Text>
      }
      { changeText2 === true &&
        <Text>Page2</Text>
      }
      { changeText3 === true &&
        <Text>Page3</Text>
      }
        <Button title={changeText === false ? "Afficher Page 1" : "Cacher Page 1"} 
        onPress={handlePress}/>
        <Button title={changeText2 === false ? "Afficher Page 2" : "Cacher Page 2"} 
        onPress={handlePress2}/>
        <Button title={changeText3 === false ? "Afficher Page 3" : "Cacher Page 3"} 
        onPress={handlePress3}/>
      
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
    flex: 1,
    flexDirection: 'row',
  },

});
