import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import Course from './component/Course';



<<<<<<< HEAD
export default function App() {
=======
  const [ idPage, setIdPage] = useState("1")
  const pages = [
    {
      id:"1",
      title:"PAGE 1",
      component:<Page1 pwet={setIdPage}/>,
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
>>>>>>> 7a2c93311187f873ddf9ed0c312d141969c1ee6e

  
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
