import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(value =>{
      alert('Usuario criado: '+ value.user.email)
    }).catch(error => {
      if(error.code === 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres')
        return
      }
    })
  }

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(email) => setEmail(email)}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(password) => setPassword(password)}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />

      <FlatList
        keyExtractor={item => item.key}
        data={usuarios}
        renderItem={item => (<Listagem data={item}/>)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
  }
})