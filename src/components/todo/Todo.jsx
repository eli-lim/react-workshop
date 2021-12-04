import React from 'react'
import styled from '@emotion/styled'

const Todo = ({ todo }) => {
  const { id, title, completed } = todo
  return (
    <Container>
      <h3>
        { id }. { title }
        <span style={{ marginLeft: 8 }}>
          { completed ? '✅' : '❌' }
        </span>
      </h3>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 4px;
  padding: 12px;
  background-color: white;
  color: black;
  box-shadow: 4px 4px 8px 2px #a3b4c5;
  margin: 12px;

  :hover {
    transform: translate(10px);
  }
  transition: transform 0.2s;
`

export default Todo