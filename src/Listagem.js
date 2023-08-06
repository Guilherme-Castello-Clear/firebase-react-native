import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Listagem({data}){
  
    return(
    
    <View style={styles.container}>
      <Text style={styles.text}>{data.nome}</Text>
      <Text style={styles.text}>{data.cargo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      marginBottom: 5,
      marginTop: 10,
      flex:1,
    backgroundColor: '#131313',
    padding: 10,
  },
  text:{
    color:'#FFF',
    fontSize: 17
  }
});