import React,{ useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import { StatusBar, Dimensions, Alert, TouchableOpacity, Text } from 'react-native';
import Input from './components/Input';
import Task from './components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import LineButton from './components/LineButton';

//스타일드 컴포넌트
const Container = styled.View`
  flex:1;
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  background-color: ${({theme}) => theme.itemBackground};
  color: ${({theme})=>theme.text};
  text-align:center;
  align-self: center;
  margin:15px 0px 5px 0px;
  width:${({width})=> width - 40}px;
`;

const List = styled.ScrollView`
  flex:1;
  width:${({width})=> width - 40}px;
  `;

const width = Dimensions.get('window').width;

export default function App() {
  
  const [isReady, setIsReady] = useState(false);  //앱 실행준비 상태
  const [newTask, setNewTask ] = useState('');    //새로운 항목
  const [tasks, setTasks] = useState({});         //항목 리스트

  //로컬 저장소에 데이터 저장하기
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      setTasks(value);
    } catch (e) {
      // saving error
    }
  }
  
  //로컬 저장소에서 데이터 가져오기
  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      console.log(jsonValue);
      const tasks = jsonValue != null ? JSON.parse(jsonValue) : {};
      setTasks(tasks);
    } catch(e) {
      console.log('데이터 가져오기:'+jsonValue);
    }
  }

  //추가
  const _addTask = ()=>{
    console.log('입력완료');
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]:{id:ID, text:newTask, completed:false}
    };

    storeData('tasks', {...tasks, ...newTaskObject});  //로컬 저장소에 저장
    setNewTask('');
  };
  
  const _handleTextChange = text=>{
    setNewTask(text);
  };

  //삭제
  const _deleteTask = (id)=>{
    const currentTasks = {...tasks};  //객체복사
    delete currentTasks[id];
    storeData('tasks', currentTasks);  //로컬 저장소에 저장
  };

  //완료
  const _toggleTask = id => {
    const currentTasks = {...tasks};  //객체 복사
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    storeData('tasks', currentTasks);  //로컬 저장소에 저장
  }

  //수정
  const _updateTask = task => {
    const currentTasks = {...tasks};   //객체 복사
    currentTasks[task.id] = task;       //수정 항목
    storeData('tasks', currentTasks);  //로컬 저장소에 저장
  }

  //완료항목 전체 삭제
  const _delAllTask = () => {

    const currentTasks = {...tasks};

    //완료항목
    const completedTasks =
    Object.entries(currentTasks)
                               .filter(task=>task[1].completed==true);

    //완료 항목이 없는 경우 확인창을 띄우지 않음
    if(completedTasks.length < 1) return;

    const deleteCompletedItems = () => {
      //미완료항목
      const filteredTasks = 
      Object.fromEntries(Object.entries(currentTasks)
                               .filter(task=>task[1].completed==false));
      storeData('tasks',filteredTasks);
    }
  
    Alert.alert(
      "삭제", //경고창 제목
      "완료 항목을 삭제하시겠습니까?", //경고창 메시지
      [
        {
          text: "예",
          onPress: () => deleteCompletedItems(),
        },
        { text: "아니오", 
          onPress: () => {}
        }
      ]
    );
  }



  //입력 필드에 포커스가 떠났을 때
  const _onBlur = ()=>{
    setNewTask('');
  }

  return !isReady ? 
  (
      <AppLoading
        // 앱 로딩 전 실행할 로직     
        startAsync={()=>getData('tasks')}
        //startAsync 호출이 성공적으로 수행되면
        onFinish={() => setIsReady(true)}
        //startAsync 호출이 실패하면
        onError={console.error}
     />
    )
    :
    (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title width={width}>버킷 리스트</Title>
        <Input 
          value={newTask}
          placeholder='+ 항목 추가'
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />
        <List width={width}>
          {Object.values(tasks)
                 .reverse()
                 .map(task=><Task key={task.id}
                                  task={task} 
                                  deleteTask={_deleteTask}
                                  toggleTask={_toggleTask}
                                  updateTask={_updateTask}
                            />)
          }
        </List>
          <LineButton text='완료항목 전체삭제'
                      onPressOut={_delAllTask}/>
      </Container>
    </ThemeProvider>
  );
}