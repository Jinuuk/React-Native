import styled, {css} from 'styled-components/native'
import {Header, Contents, Footer} from './components/Layout';

const Main = styled.View`
flex:1
background-color:yellow;
`;

const styleOfHeader = {
  flex:0.3,
  bgColor:'#f00',
  color:'#fff'
}
const styleOfContents = {
  flex:1,
  bgColor:'#0f0',
  color:'#fff'
}
const styleOfFooter = {
  flex:0.1,
  bgColor:'#00f',
  color:'#fff'
}

const App = () => {
  return (
    <Main>
      <Header style={styleOfHeader}/>
      <Contents style={styleOfContents}/>
      <Footer style={styleOfFooter}/>
    </Main>
  );
}

export default App;

