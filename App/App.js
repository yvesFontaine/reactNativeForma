import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const size = 60;
  return (
    <View>
      <Text style={styles.red}>Allez le Bayern</Text>
      <Text style={{...styles.red,...styles.underline,fontSize:size+2}}>Allez le Bayern</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  red:{
    color: 'red',
    fontSize:35,
    fontWeight:'bold'
  },
  underline:{
    textDecorationLine:'underline'
  }
});