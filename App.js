import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password).then(value =>{
      alert('Seja bem vindo, '+ value.user.email)
      setUser(value.user.email)
    }).catch(error => {
      alert('Algo deu errado')
    })
  }

  async function logout(){
    await firebase.auth().signOut();
    setUser('')
    alert('Deslogado com sucesso')
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
        title="Logar"
        onPress={logar}
      />

      <FlatList
        keyExtractor={item => item.key}
        data={usuarios}
        renderItem={item => (<Listagem data={item}/>)}
      />

      <Text>
        {user}
      </Text>
      {user.length > 0 && <Button
        title="Logout"
        onPress={logout}
      />}

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10,
  }
})