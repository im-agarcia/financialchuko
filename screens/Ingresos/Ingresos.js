import { StyleSheet, View, Text } from 'react-native'
import { DatePicker } from '../../components';
const Ingresos = () => {
  return (
    <View
      style= {styles.container}
    >
      <DatePicker/>
    </View>
  )
}
export default Ingresos

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});