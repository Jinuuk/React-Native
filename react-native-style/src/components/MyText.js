import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import styled, {css} from 'styled-components/native';

const bgcolor = css`
font-size : 40px;
color:#00f;
`;

const StyledText = styled.Text`
  // font-size : 40px;
  // color:#00f;
  ${bgcolor}
  background-color:yellow
`;

const StyledText2 = styled.Text`
  // font-size : 40px;
  // color:#0f0;
  ${bgcolor}
  background-color:green
  font-weight:${props => props.bold};
`;

const MyText = (props) => {
  return (
    <Pressable>
      <Text
      //스타일-1)인라인 방식
        style={{
          fontSize:30,backgroundColor:'#f00',
          fontWeight:props.bold
        }}
      >울산KH정보교육원</Text>
      <Text
      //스타일-2)클래스 스타일링
        style = {styles.fontStyle}
      >울산KH정보교육원</Text>

      {/* 스타일-3) 스타일드 컴포넌트 */}
      <StyledText>울산KH정보교육원</StyledText>
      <StyledText2>울산KH정보교육원</StyledText2>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  fontStyle : {
    fontSize : 40

  }
});


export default MyText;