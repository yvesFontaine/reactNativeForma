import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';
import SplashScreen from './components/SplashScreen/SplashScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      window:<SplashScreen onFinishSplash={
        ()=>{
          this.onFinishSplash()
        }
      }
      />,
      login:undefined
    };
  }

  onFinishSplash(){
    this.setState({window:<Auth onConnect={
         ()=>{this.onAuthSuccess()}
    }/>})
  }

  onAuthSuccess(login){
      this.setState({window: <Main/>, login: login})
  }

  render() {
    return (
      <View>
        {this.state.window}
      </View>
    );
  }
}
