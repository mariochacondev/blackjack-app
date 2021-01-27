import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import axios from 'axios';

export default function Fiche(props) {

    const [ course, setCourse ] = useState(undefined);

    useEffect(function() {
        axios.get(`http://127.0.0.1:8000/fiche/`+ props.id)
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
            <Text>Title</Text>
            <Text>Description</Text>
            <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />
        <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
        />

          </View>
    );
}