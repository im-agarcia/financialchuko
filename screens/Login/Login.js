import { StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'
import { CircleButton } from '../../components';


const Login = ({ navigation }) => {


  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.textoPrincipal}
      >
        LOGIN
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Tu Correo'
      />
      <TextInput
        style={styles.input}
        placeholder='Constraseña'
        secureTextEntry={true}
      />

      <CircleButton
        btnLabel= 'Ingresar' 
        touhBehavior= {()=>{navigation.navigate('Home')}}
      />


    </View>
  )
}
export default Login

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal: {
    fontSize: 60,
    marginTop: 120,
    marginBottom: 100
  },
  input: {
    marginTop: 10,
    width: '60%',
    padding:5,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  }
});