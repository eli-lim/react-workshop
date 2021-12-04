import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Todo from './Todo'

const TodoListWithFetchedData = ({ limit = 3 }) => {

  const [todos, setTodos] = useState([])

  // When the Component is created,
  // fetch the data and update our 'todos' state
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(jsonTodos => setTodos(jsonTodos))
  })

  return (
    <Container>
      {
        todos
          .slice(0, limit)
          .map(todo => <Todo todo={todo} />)
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

export default TodoListWithFetchedData