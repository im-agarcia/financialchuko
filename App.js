import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './navigation/MainStack';
import Test from './screens/Test/Test';

export default function App() {
  return (
    //<MainStack/>
    <Test/>
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
