import {View, Text, StyleSheet} from 'react-native' 
import { DatePicker } from '../../components';

const Ahorros = () => {
  return (
    <View
      style={styles.container}
    >
      <DatePicker/>
    </View>
  )
}
export default Ahorros

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  });