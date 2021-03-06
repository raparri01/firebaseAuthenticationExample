import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Title } from 'native-base';
import Fire from '../Fire';

class SignIn extends React.Component {

  onLogin = () => {
    const { email, password } = this.state;
    Fire.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Login Successful');
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch((error) => {
        var errorMessage;

        const { code, message } = error;
        errorMessage = code;

        //Custom Error Fix Suggestions based on error code.
        switch(code){
          case 'auth/wrong-password':
            errorMessage = 'Email or password is incorrect'
            break;
          case 'auth/invalid-email':
            errorMessage = 'Enter a valid email address';
            break;
          case 'auth/user-not-found':
            errorMessage = 'Email or password is incorrect';
            break;
        }
        this.setState({
          errorMessage:errorMessage
        })

        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  }

  static navigationOptions = {
    title: 'Sign In',
  }

  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this);

    this.state = {
      email:'',
      password:'',
      errorMessage:'',
      }
  }

  render(){
    return(

      <Container style = {styles.container}>
        <Content style = {{paddingTop: 10}}>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                onChangeText = {(loginEmail) => this.setState({email:(loginEmail)})}
                />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText = {(loginPassword) => this.setState({password:(loginPassword)})}
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
          <Button
            transparent style = {styles.button}
            onPress = {this.onLogin}
            >
            <Text style = {{fontSize:25,}}>Sign In</Text>
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
    alignSelf: 'center',
    paddingTop: 30,
    height:null,
  },
});

export default SignIn;
