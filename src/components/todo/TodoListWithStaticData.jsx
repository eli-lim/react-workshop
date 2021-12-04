import React, { useState } from 'react'
import styled from '@emotion/styled'
import Todo from './Todo'

const TodoListWithStaticData = () => {

  const [todos, setTodos] = useState([
    {
      "id": 1,
      "title": "Eat breakfast",
      "completed": true
    },
    {
      "id": 2,
      "title": "Go to class",
      "completed": false
    },
    {
      "id": 3,
      "title": "Take a nap",
      "completed": false
    },
  ])

  return (
    <Container>
      {
        todos.map(todo => <Todo todo={todo} key={todo.id} />)
      }
    </Container>
  )
}

const Container = styled.div`
  border-radius: 4px;
  padding: 12px;
  width: 300px; // TODO: make this a prop
  background-color: white;
`

export default TodoListWithStaticData