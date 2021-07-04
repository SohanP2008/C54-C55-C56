import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class Button4 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://files.q2online.net/action/sound/shadowfire/fan.wav' },
      { shouldPlay: true }
    );
  };

  render(){
    return(
      <View>
      
      <TouchableOpacity style = {{
        marginTop: 25,
        marginLeft: 5, 
        backgroundColor: "grey",
        marginRight: 50,
        alignItems: "center",
        width: 200,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: "center"}}

      onPress = {this.playSound} >
      <Text style = {{
        fontFamily: "comic sans ms",
        fontSize: 25,
        fontWeight: "bold",
        color: "white"}}>
      Sound 4
      </Text>

      </TouchableOpacity>
      
      </View>
    )
  }
}

export default Button4