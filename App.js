import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import firebase from './src/firebaseConnection';
import Login from './src/Components/Login';

export default function App(){

  const [user, setUser] = useState(null)

  if(!user){
    return <Login/>
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text>Dentro de Tarefas</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc'
  }
})