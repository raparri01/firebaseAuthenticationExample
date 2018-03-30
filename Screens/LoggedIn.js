import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import Fire from '../Fire';


class LoggedIn extends React.Component {
  logOut = () => {
    console.log(Fire.auth().signOut());
  }

  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);

  }
  render(){
    return(
      <View style = {styles.container}>
        <Text>
          Logged In
        </Text>
        <Button
          style = {{padding: 5, alignSelf: 'center' }}
          onPress = {this.logOut}
          >
          <Text>Log Out</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoggedIn;
