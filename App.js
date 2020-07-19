import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!' )
  const[count, newCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Text>{count}</Text>
      <Button title="Change Text" onPress={()=>setOutputText('Hello to your firstChange')} ></Button>
      <Button title="Press Count" onPress = {()=> newCount(count+1)} ></Button>
      <Button title="Reset Count" onPress = {()=> newCount(count*0)} ></Button>
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
