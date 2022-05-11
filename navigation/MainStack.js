import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {Home, Login, Ingresos, Egresos, Ahorros} from '../screens/index'

const Stack = createNativeStackNavigator()


const MainStack = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='Login'
          component={Login}
        />

        <Stack.Screen
          name='Home'
          component={Home}
        />

        <Stack.Screen
          name='Egresos'
          component={Egresos}
        />

        <Stack.Screen
          name='Ingresos'
          component={Ingresos}
        />

        <Stack.Screen
          name='Ahorros'
          component={Ahorros}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainStack