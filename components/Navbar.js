import React, { useState } from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default function Navbar(props){


    let buttons = props.pages.map(function(page) {

        return <Button color="black" title={page.title} onPress={function () {

            props.setIdPage(page.id)

        }} />

    });

    

    return ( 
    <View style={styles.navbar} >
        {buttons}
    </View>
 );
}

const styles = StyleSheet.create({

navbar: {
    width: '100%',
    color:"black",
    flexDirection: 'row',
    justifyContent: "space-around",
    },    

})