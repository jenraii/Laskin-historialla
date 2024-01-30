import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, FlatList } from 'react-native';

export default function App() {

  const [numA, setNumA] = useState(null);
  const [numB, setNumB] = useState(null);
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]); 

  const plusButtonPressed = () => {
    const sum = Number(numA) + Number(numB); 
    setResult(sum);
    setHistory([...history, {key: Number(numA) + " + " + Number(numB) + " = " + sum} ]);
  };

  const minusButtonPressed = () => {
    const subtraction = Number(numA) - Number(numB); 
    setResult(subtraction);
    setHistory([...history, {key: Number(numA) + " - " + Number(numB) + " = " + subtraction} ]);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={number => setNumA(number)}
        value={numA}
      />
      <TextInput
        style={{width: 200, borderColor: 'grey', borderWidth: 1}}
        keyboardType="numeric"
        onChangeText={number => setNumB(number)}
        value={numB}
      />
      <View style={styles.button}>
        <Button onPress={plusButtonPressed} title="+" />
        <Button onPress={minusButtonPressed} title="-" />
      </View>
      <Text>History: </Text>
        <FlatList
          data = {history}
          renderItem = { ({item}) => <Text>{item.key}</Text> }
          keyExtractor = { (item, index) => index.toString()}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 90,
    paddingTop: 25,
    paddingBottom: 25,
  },
})