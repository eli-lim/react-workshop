import React from 'react'
import styled from '@emotion/styled'
import Counter from './components/Counter'
import TodoListWithStaticData from './components/todo/TodoListWithStaticData'
import TodoListWithFetchedData from './components/todo/TodoListWithFetchedData'

function App() {
  return (
    <AppContainer>
      <FlexContainer>
        <ComponentShowcase>
          <h1>{ `<Counter />` }</h1>
          <Counter />
        </ComponentShowcase>
      </FlexContainer>

      <Divider/>

      <FlexContainer>
        <ComponentShowcase>
          <h1>{ `<TodoListWithStaticData />` }</h1>
          <TodoListWithStaticData />
        </ComponentShowcase>

        <ComponentShowcase>
          <h1>{ `<TodoListWithFetchedData />` }</h1>
          <TodoListWithFetchedData />
        </ComponentShowcase>
      </FlexContainer>

      <Divider/>

      <div>
      </div>

    </AppContainer>
  )
}

const AppContainer = styled.div`
  padding: 20px;
`

const ComponentShowcase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    color: #a098e5;
    font-weight: lighter
  }
`

const Divider = styled.hr`
  margin: 24px 0 24px 0;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export default App
