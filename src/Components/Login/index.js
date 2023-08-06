import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('login')
  
    function handleLogin(){
        
    }
  
    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder='Seu email'
                style={styles.input}
                value={email}
                onChangeText={ text => setEmail(text)}
            />

            <TextInput
                placeholder='*******'
                style={styles.input}
                value={password}
                onChangeText={ text => setPassword(text)}
            />

            <TouchableOpacity
                style={[styles.handleLogin, { backgroundColor: type === 'login' ? 'blue' : '#141414'}]}
                onPress={handleLogin}
            >
                <Text>{type === 'login' ? 'Acessar' : 'Cadastrar'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')}
            >
                <Text style={{textAlign: 'center'}}>{type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}</Text>
            </TouchableOpacity>
        </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 40,
        backgroundColor: '#F2f6fc',
        paddingHorizontal: 10,
      },
      input:{
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'
      },
      handleLogin:{
        alignItems: 'center',
        justifyContent:'center',
        height: 45,
        marginBottom: 10,
      },
      loginText:{
        color: '#FFF',
        fontSize: 17,
      }
})