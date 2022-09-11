import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MyButtons from './MyButtons';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  const _increase = () => {
    setCount(count + 1);
    setDouble(double + 2);
  };

  const _decrease = () => {
    setCount(count - 1);
    setDouble(double - 2);
  };


  return (
    <View style = {{alignItems:'center'}}>
      <Text style = {{fontSize:30, margin : 10}}>count : {count}</Text>
      <Text style = {{fontSize:30, margin : 10}}>double : {double}</Text>
      <MyButtons title = '+1' onPress={()=>setCount(_increase)}></MyButtons>
      <MyButtons title = '-1' onPress={()=>setCount(_decrease)}></MyButtons>
    </View>
  );
  
};

export default Counter;