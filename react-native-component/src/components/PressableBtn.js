import React from 'react';
import {View, Text, Pressable } from 'react-native';

// props = {
//   title:'Pressable',
// }

const PressableBtn = (props) => {

  const _onPressIn = () => alert('Press IN!!! \n');
  const _onPressOut = () => alert('Press OUT!!! \n');
  const _onPress = () => alert('Press !!! \n');
  const _onLongPress = () => alert('Long Press IN!!! \n');

  return (
    <Pressable
      style ={{padding:10, backgroundColor:'#1abc9c', borderRadius:30}}
      //onPressIn = {_onPressIn}
      onPressOut = {_onPressOut}
      //onPress = {_onPress}
      //onLongPress = {_onLongPress}
      //delayLongPress = {2000}
      
      pressRetentionOffset = {{top:50, right:50, bottom:50, left:50}}
      // hitSlop={{
      //   top:10, right:10, bottom : 50, left:10
      // }}
    >
      <Text style = {{padding:10, fontSize:30}}>{props.title}</Text>
    </Pressable>
  );
};

export default PressableBtn;
