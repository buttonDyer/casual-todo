import { React, useState } from 'react'

import { StatusBar } from 'expo-status-bar'

import { Keyboard, Platform, TouchableOpacity } from 'react-native'

import Task from './components/Task'

import styled from 'styled-components/native'

const Container = styled.ScrollView`
  flex: 1;
  background-color: hsla(216, 12%, 92%, 1);
`

const TasksWrapper = styled.View`
  padding-top: 80;
  padding-horizontal: 20;
`

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
`

const List = styled.View`
  margin-top: 30;
`

const InputWrapper = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 60;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
    <>
      <Container>
        <StatusBar />
        <TasksWrapper>
          <Title>Today's tasks</Title>
          <List>
            {taskList.map((item, id) => {
              return (
                <Task
                  key={id}
                  id={id}
                  text={item}
                  completeTask={completeTask}
                />
              )
            })}
          </List>
        </TasksWrapper>
      </Container>
      <InputWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
    </>
  )
}

export default App
