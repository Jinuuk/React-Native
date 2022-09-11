import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';


const StyledInput = styled.TextInput.attrs(
  ({placeholder})=>
     ({
        placeholderTextColor : 'orange'
     }))`
              width: ${({width}) => width-40}px;
              height:60px;
              margin:3px 0;
              padding: 15px 20px;
              border-radius: 10px;
              background-color: ${({theme})=>theme.itemBackground};
              font-size: 25px;
              font-weight: bold;
              color:${({theme})=>theme.text};
`;

const Input = ({value,placeholder,onChangeText,onSubmitEditing,onBlur})=>{
  const width = Dimensions.get('window').width;

  return (
    <StyledInput 
      width={width} 
      value={value}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize={'none'}
      returnKeyType={'done'}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur = {onBlur}
      />
  )
}

Input.defaultProps = {
  value:'기본값'
}

Input.propTypes = {
  value:PropTypes.string,
  placeholder:PropTypes.string.isRequired,
  onChangeText:PropTypes.func.isRequired,
  onSubmitEditing:PropTypes.func.isRequired,
  onBlur:PropTypes.func.isRequired,
}

export default Input;