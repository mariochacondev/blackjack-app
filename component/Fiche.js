import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import axios from 'axios';

export default function Fiche(props) {

    const [ fiche, setFiche ] = useState(undefined);

    useEffect(function() {
        axios.get(`http://127.0.0.1:8000/fiche/`+ props.id)
        .then(function(response) {
            setFiche(response.data);
        }) 
    }, [props.id]);

    if (fiche === undefined){
        return <View>
        <Text>Loading...</Text>
      </View>
    }


    return (
    
        <View >
            <Text>Title {fiche.title}</Text>
            <Text>Description {fiche.subtitle}</Text>
          </View>
    );
}