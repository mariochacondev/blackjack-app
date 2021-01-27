import React, { useState } from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function Page1(props) {
    return <View>
        <Text>Table 1 here PLAY</Text>
        <View>
            <Button style={styles.btnStart}
            title="Rejoindre une table"
            onPress={function(){
                props.pwet("2")
            }}
            />
        </View>
    </View>
}
const styles = StyleSheet.create({
    btnStart: {
        
    }
})