import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    Italic: require('./assets/fonts/OpenSans-Italic.ttf'),
  });
  
  if (!loaded) {
    return <ActivityIndicator />;
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text2}>Open up App.js to start working on your app!</Text>
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
  text1: {
    fontFamily: 'OpenSans',
    fontSize: 30,
  },
  text2: {
    fontFamily: 'Italic',
    fontSize: 15,
  }
});
