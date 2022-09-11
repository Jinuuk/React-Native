import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container2}>
      <Text style={styles.fcolor}>Hello World!!!</Text>
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

  container2: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fcolor:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
    fontStyle:"italic",
    letterSpacing:20,
    textDecorationLine:'underline',
    textShadowColor:'#eee',
    textShadowOffset:{width:20,height:30}
}
});


