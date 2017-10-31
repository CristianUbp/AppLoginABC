'use strict'
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';


const ACCESS_TOKEN = 'access_token';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
      errors:[],
    }
  }

render(){

  return(
    <View style={styles.container}>
      <TextInput
      onChangeText={(val) => this.setState({email: val})}
      style={styles.input} placeholder='Email'
      />
      <TextInput
      onChangeText={(val) => this.setState({name: val})}
      style={styles.input} placeholder='Name'
      />
      <TextInput
      onChangeText={(val) => this.setState({password: val})}
      style={styles.input} placeholder='Password'
      secureTextEntry={true}
      />
      <TextInput
      onChangeText={(val) => this.setState({password_confirmation: val})}
      style={styles.input} placeholder='Confirm Password'
      secureTextEntry={true}
      />
      
      
    <Text>
   
    </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10,
    paddingTop:80
  },
  input:{
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  }

});

module.exports = Register;



