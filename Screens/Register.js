import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Title } from 'native-base';
import Fire from '../Fire';

class Register extends React.Component {

  //Define registration function prior to calling constructor
  onRegister = () => {
    const { email, password } = this.state;
    Fire.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then((user) => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        const { code, message } = error;
        this.setState({
          errorMessage:message
        })
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }

  constructor(props){
    super(props);

    //In constructor, bind the function to 'this'
    this.onRegister = this.onRegister.bind(this);

    this.state = {
      email:"",
      username:"",
      password:"",
      confirmPassword:"",
      errorMessage:'',
    }
  }
  static navigationOptions = {
    title: 'Register',
  }
  render(){
    var {navigate} = this.props.navigation;

    return(
      <Container style = {styles.container}>
        <Content style = {{paddingTop: 10}}>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                onChangeText = {(registerEmail) => this.setState({email:(registerEmail)})}
                />
            </Item>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                onChangeText = {(registerUsername) => this.setState({username:(registerUsername)})}
                />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText = {(registerPassword) => this.setState({password:(registerPassword)})}
                />
            </Item>
            <Item stackedLabel last>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText = {(confirmPassword) => this.setState({confirmPassword:(confirmPassword)})}
                />
            </Item>
          </Form>
          <Text
            style = {{
              padding: 10,
              alignSelf:'center',
              color:'red',
              textAlign:'center'
            }}
            >{this.state.errorMessage}</Text>
            <Button transparent style = {styles.button}
              onPress = {this.onRegister}>
              <Text style = {{fontSize:25,}}>Sign Up</Text>
            </Button>
              <Text style = {{textAlign:'center', justifyContent:'center', paddingTop:20}}>Already have an account?</Text>
            <Button transparent style = {{alignSelf:'center', justifyContent:'center', alignItems:'center', width:'20%'}}
              onPress = {
                () => navigate('SignInScreen')
              }>
              <Text>Sign In</Text>
            </Button>
        </Content>
      </Container>
    )
  }
}

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
    paddingTop: 30,
    height:null,
    alignSelf:'center',
  },
});

export default Register;
