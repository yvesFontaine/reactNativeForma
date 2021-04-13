import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import {REST_SRV} from '../../config/config'

export default function Auth(props) {
  const [loginData, setloginData] = useState({login:'yves2', password:'y'})

  function makeAuth() {
    console.log(loginData);
    console.log(`${REST_SRV}/users?login=${loginData.login}&password=${loginData.password}`);
    fetch(`${REST_SRV}/users?login=${loginData.login}&password=${loginData.password}`)
      .then(returnedFlow=>returnedFlow.json(), ()=>[])
      .then(objet=>{
        if(objet.length>0){
          props.onConnect(loginData.login)
        } else {
          setloginData({login:'',password:''})
        }
        return objet;
      })
  }

  return (
    <View data-testid="Auth" style={styles.container}>
      <View style={styles.loginContainer}>
        <TextInput 
          style={{fontSize: 25}}
          onChangeText={(value)=>{
            setloginData({...loginData, login: value});
          }}
          value={loginData.login}
          placeholder='Login'
        />
        <TextInput 
          style={{fontSize: 25}}
          onChangeText={(value)=>{
            setloginData({...loginData, password: value});
          }}
          value={loginData.password}
          placeholder='Password'
          secureTextEntry={true}
        />
        <Button text="Connect boi" onclick={()=>{makeAuth()}}/>
      </View>
     </View>
  );
}


Auth.propTypes = {
  onConnect: PropTypes.func.isRequired
};

Auth.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightblue',
    justifyContent:'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 250,
    borderColor:'black',
    borderStyle: 'solid',
    borderWidth: 1,
  }

})