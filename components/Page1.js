import React, { useState } from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function Page1(props) {
    const[start, setStart] = useState('start');

    const handlePress1 = function (){
        setStart('Start')
    }
    return <View>
        <Text>Table 1 here PLAY</Text>
        <View>
            <Button style={styles.btn-start} onPress={handlePress1} title="Start"/>
        </View>
    </View>
}

const styles = StyleSheet.create({

})