import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../components/config';
import React, {useState} from 'react'
import { CustomPicker } from 'react-native-custom-picker'
import { DatePicker } from '../../components';

const Test = () => {


  const [nombre, setNombre] = useState()
  const [moneda, setMoneda] = useState()
  const [monto, setMonto] = useState()
  const [descripcion, setDescripcion] = useState()
  const [categoria, setCategoria] = useState()
  const [tipo, setTipo] = useState()
  const [fecha, setFecha] = useState()
    
  function create() {
    addDoc(collection(db, "movimientos"), {
      nombre: {nombre},
      moneda: {moneda},
      monto: {monto},
      descripcion: {descripcion},
      categoria: {categoria},
      tipo: {tipo},
      fecha:{fecha}})
      .then(() => {
        console.log("Done");
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
  }

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.basicDataContainer}
      >
        <CustomPicker
          options={['Ale', 'Emi']}
          placeholder='Quien Gastó?'
          onValueChange={valor => {
            setNombre(valor)
          }}
        />

        <CustomPicker
          options={['$', 'USD']}
          placeholder='Moneda?'
          onValueChange={valor => {
            setMoneda(valor)
          }}
        />
        <TextInput
          style={styles.input}
          placeholder='Monto'
          value={monto}
          onChangeText= {(monto) => {setMonto(monto)}}
        />
      </View>

      <View 
        style={styles.basicDataContainer}
      >
        <CustomPicker
          options={['Ocio', 'Servicios', 'Alquiler', 'Estudios', 'Estética', 'Salud', 'Regalos',  ]}
          placeholder='Categoria'
          onValueChange={valor => {
            setCategoria(valor)
          }}
        />
        
        <TextInput
          style={styles.input}
          placeholder='Descripcion'
          value={descripcion}
          onChangeText= {(descripcion) => {setDescripcion(descripcion)}}
        />

        <TextInput
          style={styles.input}
          placeholder='Fecha'
          value={fecha}
          onChangeText= {(fecha) => {setFecha (fecha)}}
        />
      </View>

      <TouchableOpacity
        onPress={create}
        style={styles.button}
      >
        <Text>
          Send
        </Text>
      </TouchableOpacity>

      <DatePicker/>

    </View>

  )
}
export default Test
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  input: {
    alignContent: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  button: {
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'olive',
    padding: 10
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  safeContainer: {
    flex: 1,
    marginHorizontal: 16
  },
  basicDataContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  }
})