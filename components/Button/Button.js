import { TouchableOpacity, Text, StyleSheet } from 'react-native'
const CircleButton = ({ btnLabel , touhBehavior }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress= { touhBehavior }
    >
      <Text
        style={styles.buttonText}
      >
        { btnLabel }
      </Text>
    </TouchableOpacity>
  )
}

const RectButton = ({ hype , text, touhBehavior}) => {
    return (
      <TouchableOpacity
        style={styles.homeButton}
        onPress= { touhBehavior }
        borderColor= { hype }      
      >
        <Text
          style={styles.buttonText}
          color= { hype }
        >
          { text }
        </Text>
      </TouchableOpacity>
    )
  }

export {CircleButton, RectButton}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      width: '40%',
      height: 40,
      borderColor: '#ff00ff',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    },
    buttonText: {
      color: '#ff00ff',
      fontWeight: 'bold'
    },
    homeButton: {
      marginTop: 40,
      height: 150,
      width: '40%',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });