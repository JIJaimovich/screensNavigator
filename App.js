import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import Home from './screens/home';
import Navigator from './routes/homeStack';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    Italic: require('./assets/fonts/OpenSans-Italic.ttf'),
  });
  
  if (!loaded) {
    return <ActivityIndicator />;
  } 
  return (
      <Navigator />
  );
}


