import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function Header(props) {
    return (
        <View style={styles.header}>
        <Text style={styles.appTitle}>
          {props.title}
        </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      backgroundColor: "midnightblue",
      width: "100%",
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    appTitle: {
      fontWeight: '800',
      color: 'linen',
    },
  });