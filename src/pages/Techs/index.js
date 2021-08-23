import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, DIO!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  Title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});