import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import Listagem from './src/Listagem';
import firebase from './src/firebaseConnection';

export default function App(){
  const [nome, setNome] = useState('Carregando...');
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState([])

  useEffect(()=> {
    async function dados(){
      
      await firebase.database().ref('usuario').on('value', snapshot => {
        setUsuarios([])
        snapshot.forEach(childItem => {
          let data = {
            key: childItem.key,
            nome: childItem.val().nome,
            cargo: childItem.val().cargo,
          }
          setUsuarios([oldArray => [...oldArray, data]])
        })
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