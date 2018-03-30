import React from 'react';
import firebase from 'react-native-firebase';
// Components to display when the user is LoggedIn and LoggedOut
// Screens for logged in/out - outside the scope of this tutorial
import LoggedIn from './Screens/LoggedIn';
import LoggedOut from './Screens/LoggedOut';
import Fire from './Fire';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null
   * (logged out) or an Object (logged in)
   */
  componentDidMount() {
    this.authSubscription = Fire.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }
  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }
  render() {
    // The application is initialising
    if (this.state.loading) return null;
    // The user is an Object, so they're logged in
    if (this.state.user) return <LoggedIn />;
    // The user is null, so they're logged out
    return <LoggedOut />;
  }
}
