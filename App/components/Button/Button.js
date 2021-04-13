import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function Button(props) {
  return (
    <TouchableHighlight data-testid="Button" style={styles.container} onPress={()=>{console.log('test');props.onclick()}}>
      <Text style={{...styles.content,color:props.textColor}}>{props.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor:'grey'
  },
  content: {
    color: 'black'
  }
})

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired
}
Button.defaultProps = {
  textColor:'blue',
  onclick: ()=>{console.log('button clicked')}
}