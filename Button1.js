import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class Button1 extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Alto%20Sax%20in%20C4-5997-Free-Loops.com.mp3' },
      { shouldPlay: true }
    );
  };

  render(){
    return(
      <View>
      
      <TouchableOpacity style = {{
        marginTop: 25,
        marginLeft: 5, 
        backgroundColor: "black",
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
      Sound 1
      </Text>

      </TouchableOpacity>
      
      </View>
    )
  }
}

export default Button1