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
    
  ];
  const [idCarte, setIdCarte] = useState(" ")
  const cartes = [{id: "1",title: "As",},{id: "11",title: "As",},{id: "2",title: "Deux",},{id: "3",title: "Trois",},
    {id: "4",title: "Quatre",},{id: "5",title: "Cinq",},{id: "6",title: "Six",},
    {id: "7",title: "Sept",},{id: "8",title: "Huit",},{id: "9",title: "Neuf",},
    {id: "10",title: "Dix",},{id: "11",title: "Valet",},{id: "12",title: "Dame",},
    {id: "13",title: "Roi",},];


  let body = pages.find(function(page) {
    return page.id === idPage
  });
  let paquet = cartes.find(function(carte){
    return carte.id == idCarte
  });
  
  return (
    <View style={styles.container}>
      <Header title="Blackjack App" />
      

      <Navbar pages={pages} setIdPage={setIdPage} />

      {body.component}
      <View>
        
      </View>  
      
      
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
