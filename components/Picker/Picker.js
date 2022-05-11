import React, {Component, useState} from 'react'
import CalendarPicker from 'react-native-calendar-picker'
import {Picker} from '@react-native-picker/picker';

import {
    StyleSheet,
    Text,
    View
  } from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }

      render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
          <View style={styles.container}>
            <CalendarPicker
              onDateChange={this.onDateChange}
            />
    
            <View>
              <Text>SELECTED DATE:{ startDate }</Text>
            </View>
          </View>
        );
      }
    }
    

export const DataPicker = ({intro, option1, option2}) => {

  const [selectedOption, setSelectedOption] = useState();

  return (
   <View style={styles.pickerContainer}>
      <Text
        style={styles.pickerText}
      >
        {intro}
      </Text>

      <Picker
      style={styles.picker}
      selectedValue={selectedOption}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedOption(itemValue)
      }>
        <Picker.Item label={option1} value="option1" />
        <Picker.Item label={option2} value="option2" />
      </Picker>
   </View>

 ) 
}


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: '#ff00ff'
      },
      pickerContainer: {
        marginBottom:10,
        flexDirection: 'row',
        justifyContent:'center',
        width: 200
      },
      pickerText: {
        marginVertical: 20,
        fontSize: 15
      },
      picker: {
        width:100
      }
    });