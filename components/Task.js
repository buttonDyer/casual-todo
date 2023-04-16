import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styled from 'styled-components/native'

const TaskWrapper = styled.View`
  background-color: hsla(0, 0%, 100%, 1);
  padding: 15px;
  border-radius: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20;
  border-width: 1;
  border-color: hsla(0, 0%, 75%, 0.5);
`

const LeftPart = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const DeleteButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center
  width: 24;
  height: 24;
  border-radius: 5;
  margin-right: 15;
`

const TaskText = styled.Text`
  max-width: 80%;
`

const Indicator = styled.View`
  width: 12;
  height: 12;
  border-radius: 5;
`

const Task = (props) => {
  const now = new Date()
  const createdAt = new Date(props.createdAt)
  const hoursDiff = Math.floor((now - createdAt) / (1000 * 60 * 60))

  let indicatorColor = 'green'
  if (hoursDiff >= 24) {
    indicatorColor = 'red'
  } else if (hoursDiff >= 5) {
    indicatorColor = 'orange'
  }

  return (
    <TaskWrapper>
      <LeftPart>
        <DeleteButton onPress={() => props.completeTask(props.id)}>
          <Icon name="delete" size={25} color="#000" />
        </DeleteButton>
        <TaskText>{props.text}</TaskText>
      </LeftPart>
      <Indicator style={{ backgroundColor: indicatorColor }}></Indicator>
    </TaskWrapper>
  )
}

export default Task
