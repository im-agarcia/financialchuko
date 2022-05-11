import { StyleSheet, View, Text } from 'react-native'
import { DatePicker } from '../../components';

const Egresos = () => {
  

  return (
    <View
      style={styles.container}
    >



      <DatePicker/>

    </View>
  )
}
export default Egresos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems:'center'
  },
  TouchableOpacity: {
    alignSelf: 'stretch',
    paddingHorizontal: 20
  }

});