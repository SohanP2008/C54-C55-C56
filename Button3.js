import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class Button3 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.takuichi.net/hobby/edu/sonic_wave/sound_analysis/sound_instruments/Trunpet.wav' },
      { shouldPlay: true }
    );
  };

  render(){
    return(
      <View>
      
      <TouchableOpacity style = {{
        marginTop: 25,
        marginLeft: 5, 
        backgroundColor: "red",
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
      Sound 3
      </Text>

      </TouchableOpacity>
      
      </View>
    )
  }
}

export default Button3