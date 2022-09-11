import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from './components/MyButtons';

export default function App() {
  const name = '홍길동';
  let i;
  const fsize = {
    // level1:5,
    // level2:10,
    // level3:15,
    // level4:20,
    [`level${++i}`]:5,
    [`level${++i}`]:10,
    [`level${++i}`]:15,
    [`level${++i}`]:20
  }

  console.log(fsize,dimension);

  const dimension = [
    {width:10, height:10},
    {width:10, height:10},
    {width:10, height:10},
    {width:10, height:10},
  ];

  const updata_h =() => {console.log('수정')}
  const save_h = () => {console.log('저장')}
  const list_h = () => {console.log('목록')}
  const delete_h =() => {console.log('삭제')}

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Text>아이디</Text>
      <TextInput style={styles.input}/>
      </View>
      <Text style={styles.myfont}>내 이름은 {name}입니다.</Text>
      <StatusBar style="auto" />
      <View style = {styles.container2}>
      <MyButton //title='수정'
       fsize={fsize.level1} dimension={dimension[0]} onPress={updata_h}>수정하기</MyButton>
      <MyButton title="저장" fsize={fsize.level1} dimension={dimension[1]} onPress={save_h}></MyButton>
      <MyButton title="목록" fsize={fsize.level2} dimension={dimension[2]} onPress={list_h}></MyButton>
      <MyButton title="삭제" fsize={fsize.level4} dimension={dimension[3]} onPress={delete_h}></MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  myfont: {
    fontSize:25,
    backgroundColor: 'lightblue',
    color:'white',
    fontWeight:'bold'
  },

  container2:{
    flexDirection:'row'
  },

  input : {
    height:40,
    marigin:12,
    borderWidth:1,
    padding:10
  }

});
