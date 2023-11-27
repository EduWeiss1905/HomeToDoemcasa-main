import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/Union-removebg-preview.png')}
      />
      <View styles={styles.quartos}>
          <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Rooms')}>
            <Text style={styles.textoBotao}>Quarto 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Tasks')}>
            <Text style={styles.textoBotao}>Quarto 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Tarefas3')}>
            <Text style={styles.textoBotao}>Quarto 3</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ACFFF9C'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {

  },
  tinyLogo: {
    alignSelf: 'center',
    marginTop: '6.1%',
    marginBottom: '8%'
  },
  botao: {
    backgroundColor: '#9ACFFF',
    padding: 10,
    margin: 10,
    height: '25%',
    borderRadius: 13,
    
  },
  textoBotao: {
    fontSize: 25
  }
})