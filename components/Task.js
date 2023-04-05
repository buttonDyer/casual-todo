import React from 'react'

import styled from 'styled-components/native'

const TaskWrapper = styled.View`
  background-color: hsla(0, 0%, 100%, 1);
  padding: 15px;
  border-radius: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20;
`

const LeftPart = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const Checkbox = styled.TouchableOpacity`
  width: 24;
  height: 24;
  background-color: hsla(202, 90%, 65%, 0.4);
  border-radius: 5;
  margin-right: 15;
`

const TaskText = styled.Text`
  max-width: 80%;
`

const Indicator = styled.View`
  width: 12;
  height: 12;
  border-color: hsla(202, 90%, 65%, 0.4);
  border-width: 2;
  border-radius: 5;
`

const Task = (props) => {
  return (
    <TaskWrapper>
      <LeftPart>
        <Checkbox></Checkbox>
        <TaskText>{props.text}</TaskText>
      </LeftPart>
      <Indicator></Indicator>
    </TaskWrapper>
  )
}

export default Task
