import React from 'react';
import {View, Text} from 'react-native';
import styled, {css} from 'styled-components/native';

const common = css`
  background-color : ${({style})=>style.bgColor};
  flex:${({style})=>style.flex};
  color:${({style})=>style.color};
  font-weight:bold;
  font-size : 30px;
  text-align:center;
`;

const StyledHeader = styled.View`
  ${common}
`;
const StyledContents = styled.View`
  ${common}
`;
const StyledFooter = styled.View`
  ${common}
`;

const Header = ({style}) => {
  return (
    <StyledHeader style={style}>
      <Text>Header</Text>
    </StyledHeader>
  )
};
const Contents = ({style}) => {
  return (
    <StyledContents style={style}>
      <Text>Contents</Text>
    </StyledContents>
  )
};
const Footer = ({style}) => {
  return (
    <StyledFooter style={style}>
      <Text>Footer</Text>
    </StyledFooter>
  )
};

export {Header, Contents, Footer}