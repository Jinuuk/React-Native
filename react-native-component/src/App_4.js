import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Counter from './components/Counter'
import EventButton from './components/EventButton'
import EventInput from './components/EventInput';

export default function App() {


  return (
    <View style={styles.container}>
      <EventInput/>
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
