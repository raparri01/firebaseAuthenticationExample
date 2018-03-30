import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Title } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Register from './Register';
import SignIn from './SignIn';

class LoggedOut extends React.Component {

  render(){

    return(
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = StackNavigator({
  RegistrationScreen: {screen: Register},
  SignInScreen: {screen: SignIn}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
  },
  button: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    paddingTop: 30,
    height:null,
  },
});

export default LoggedOut;
