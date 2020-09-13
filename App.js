import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import default class App extends React.Component {
  construtor(props) {
    super(props);
    this.state = { date: New Date() };

  }

  relogio() {
    this.setState({
      date: New Date()
    });
  }

  componentDidMount() {
    this.TimerID = setInterval(() => this.relogio() 1000);
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.texto}>Clock Bottom</Text>
        <Text style={styles.clock}>{this.state.date.toLocateTimeString()}</Text>
      </View>
    )
  }}

  const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'colum',
      whidt:'100%',
      bacgroundColor: 'black',
      alingItens:'center'
    },

    clock:{
      fontSize:60,
      color:'white',
      whidt: '100%',
    },

    texto:{
      fontSize:60,
      color:'white',
      whidt: '100%',
      marginTop:75,
    }


  })


