import { View, StyleSheet } from 'react-native'
import { RectButton } from '../../components/Button/Button'

const Home = ({ navigation }) => {
  return (
    <View 
      style= {styles.container}
    >
      <RectButton
        hype='#ff00ff'
        text='EGRESOS'
        touhBehavior= {()=>{navigation.navigate('Egresos')}}
      />

      <RectButton
        hype='orange'
        text='INGRESOS'
        touhBehavior= {()=>{navigation.navigate('Ingresos')}}
      />   

      <RectButton
        hype='#ff00ff'
        text='AHORROS'
        touhBehavior= {()=>{navigation.navigate('Ahorros')}}
      />   

    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  buttonText: {
    color: '#ff00ff',
    fontWeight: 'bold'
  }
});