import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class Button5 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.simphonics.com/library/WaveFiles/Production%20Wavefiles/MISC/v8.wav' },
      { shouldPlay: true }
    );
  };

  render(){
    return(
      <View>
      <TouchableOpacity style = {{
        marginTop:25,
        marginLeft: 5, 
        backgroundColor: "purple",
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
      Sound 5
      </Text>

      </TouchableOpacity>
      </View>
    )
  }
}

export default Button5