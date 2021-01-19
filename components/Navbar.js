import React, { useState } from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default function Navbar(props){


    const pages = ["Page1", "Page2", "Page3", "Page4"];
    const listItems = pages.map((page) =>
  <Button title={page} onPress={handlePress}/>
);

    const[changePage, setPage] = useState(false);

    const handlePress = function(){
    setPage(!changePage)

    }





    return <View style={StyleSheet.navbar}>

        {listItems}
    </View>

}

const style = StyleSheet.create({
    navbar: {
        height: 40,
        width: '100%',
        backgroundColor: "#0055FF",
        flexDirection: 'row',
        justifyContent: "space-around"
    }
})