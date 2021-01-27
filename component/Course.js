import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, ImagePropTypes } from 'react-native';
import axios from 'axios';



export default function Course(props) {

    const [ course, setCourse ] = useState(undefined);

    useEffect(function() {
        axios.get(`http://127.0.0.1:8000/parcours/`+ props.id)
        .then(function(response) {
            setCourse(response.data);
        }) 
    }, [props.id]);

    console.log(course);

    if (course === undefined){
        return <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    }


    return (
    
        <View style={styles.container}>
            <Text style={styles.title}>{course.title}</Text>
            <View style={styles.page}>
            {course.button.map(function(buttonData) {
                return <Button color="darkcyan" title={buttonData.content} onPress={function(){
                    props.setId(buttonData.nextStepId.id)
                }}/>              
            })}
            {course.button.map(function(buttonData) {
                return <Text>{buttonData.img}</Text>
            })}
            </View>

          </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      
    },
    page: {
      flex:1,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Button: {
        margin: "30",
    }
  
  });

