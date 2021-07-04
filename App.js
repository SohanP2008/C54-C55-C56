import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Alert } from 'react-native';
import { Audio } from 'expo-av';
import Button1 from './components/Button1'
import Button2 from './components/Button2'
import Button3 from './components/Button3'
import Button4 from './components/Button4'
import Button5 from './components/Button5'

class AnyColorButton extends Component {
  displayAlert = () => {
    alert('Play Sound!');
  };

  render() {
    return (
      <Button
        color={this.props.color}
        title={this.props.title}
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  displayAlert = () => {
    alert('This is a 2nd test alert');
  };
  render() {
    return (
      <View style={{ width: 200, height: 100, marginTop: 80, marginLeft: 65 }}>
        <Button1/>
        <Button2/>
        <Button3/>
        <Button4/>
        <Button5/>
      </View>
    );
  }
}
