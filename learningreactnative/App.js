import React, {Component} from 'react';
import bgreact from './backgroundimgnative.jpg'
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {}
    this.state.customText = {
      color:'blue'
    }
    setInterval(()=>{
      if (this.state.customText.color == 'blue'){
          this.setState({
            customText:{
              color:'green'
          }
        })
      }else{
        this.setState({
          customText:{
            color:'blue'
          }
        })
      }
    },500)
    

  }
  render(){
  return (
    <View style={styles.container}>
      <Text style={[styles.titleColor,this.state.customText]}>Learning React Native</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={this._onPressButton}
            title="Press me"
            />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={this._onPressButton}
            title="Press me"
            color="#841584"
            />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={this._onPressButton}
            title="this Look great!"/>
        <Button onPress={this._onPressButton}
            title="OK!"
            color="#841584"
            />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  buttonContainer:{
    margin: 20
  },
  alternativeLayoutButtonContainer:{
    margin:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  titleColor:{
    fontSize:30,
    textAlign:'center',
    color:'#F15A39',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
