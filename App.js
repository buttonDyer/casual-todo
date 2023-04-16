import { React, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Keyboard, TouchableOpacity, FlatList } from 'react-native'
import Task from './components/Task'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: hsla(216, 12%, 92%, 1);
  padding-horizontal: 20;
  padding-bottom: 80px;
`

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  padding-top: 70;
  padding-bottom: 30px;
`

const InputWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 110%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-vertical: 20px;
  background-color: hsla(216, 12%, 92%, 1);
`

const Input = styled.TextInput`
  padding-vertical: 15;
  padding-horizontal: 15;
  background-color: hsla(0, 0%, 100%, 1);
  width: 250;
  border-radius: 60;
  border-width: 1;
  border-color: hsla(0, 0%, 75%, 0.5);
`

const AddButton = styled.View`
  width: 60;
  height: 60;
  background-color: hsla(0, 0%, 100%, 1);
  border-radius: 60;
  justify-content: center;
  align-items: center;
  border-width: 1;
  border-color: hsla(0, 0%, 75%, 0.5);
`

const AddValue = styled.Text``

const App = () => {
  const [task, setTask] = useState()
  const [taskList, setTaskList] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskList([...taskList, task])
    setTask(null)
  }

  const completeTask = (id) => {
    const tasksCopy = [...taskList]
    tasksCopy.splice(id, 1)
    setTaskList(tasksCopy)
  }

  return (
    <Container>
      <StatusBar />
      <Title>Today's tasks</Title>
      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            id={index}
            text={item}
            completeTask={completeTask}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <InputWrapper>
        <Input
          onChangeText={(text) => setTask(text)}
          value={task}
          placeholder={'Write a task'}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <AddButton>
            <AddValue>+</AddValue>
          </AddButton>
        </TouchableOpacity>
      </InputWrapper>
    </Container>
  )
}

export default App
