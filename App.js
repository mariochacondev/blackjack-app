import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Button, Text, View, ImagePropTypes } from 'react-native';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

export default function App() {

  const [ idPage, setIdPage] = useState("1")
  const pages = [
    {
      id:"1",
      title:"PAGE 1",
      component:<Page1/>,
    },
    {
      id:"2",
      title:"PAGE 2",
      component:<Page2/>,
    },
    {
      id:"3",
      title:"PAGE 3",
      component:<Page3/>,
    },

  ]

  let body = pages.find(function(page) {
    return page.id === idPage
  })
  
  
  return (
    <View style={styles.container}>
      <Header title="Blackjack App" />
      

      <Navbar pages={pages} setIdPage={setIdPage} />

      {body.component}
        
      
      
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "blue",
  },

});
