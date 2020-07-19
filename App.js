import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  return (
    <View style={{padding: 50}}>

      <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}> 
          <TextInput placeholder="Enter a Value " style={{width: '80%', borderBottomColor: 'black', borderWidth: 1, padding:10}}/>
          <Button title="Add"></Button>
      </View>
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
