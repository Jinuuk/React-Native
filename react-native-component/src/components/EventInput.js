import React, {useState} from 'react';
import {View, Text,TextInput} from 'react-native';

const EventInput = () => {
  const [text, setText] = useState('');
  const _onChange = evt => {
    console.dir(evt);
    setText(evt.nativeEvent.text)};
    

  return (
    <View>
      <Text
        style ={{
          margin:10,
          fontSize:30
        }}
      >text : {text}</Text>
      <TextInput
        style = {{
          borderWidth:1,
          padding:10,
          fontSize:20
        }}
        placeholder = 'Enter a text...'
        onChange = {_onChange}
      ></TextInput>
    </View>
  )
}

export default EventInput;