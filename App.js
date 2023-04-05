import { StatusBar } from 'expo-status-bar'

import Task from './components/Task'

import styled from 'styled-components/native'

const Container = styled.View`
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

const App = () => {
  return (
    <Container>
      <StatusBar />
      <TasksWrapper>
        <Title>Today's tasks</Title>
        <List>
          <Task text={'Task 1'} />
        </List>
      </TasksWrapper>
    </Container>
  )
}

export default App
