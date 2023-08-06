import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import firebase from './src/firebaseConnection';

export default function App(){
  const [nome, setNome] = useState('Carregando...');
  const [cargo, setCargo] = useState('');
  
  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('tipo').set('Cliente')
      await firebase.database().ref('tipo').remove()
      await firebase.database().ref('usuarios').child(3).update({
        nome: 'Castello',
      })
    }
    dados();
  }, []);

  async function cadastrar(){
    if(nome !== '' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo,
      })
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome(texto)}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
      />

      <Button
        title="Adicionar Funcionario"
        onPress={cadastrar}
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