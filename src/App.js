import React from 'react'
import styled from '@emotion/styled'
import Spinner from './components/Spinner'
import TodoListWithStaticData from './components/todo/TodoListWithStaticData'
import TodoListWithFetchedData from './components/todo/TodoListWithFetchedData'

function App() {
  return (
    <AppContainer>

      <Hero>React 101</Hero>
      <Divider />

      <FlexContainer>
        <ComponentShowcase>
          <h1>{ `<Spinner />` }</h1>
          <Spinner />
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

    </AppContainer>
  )
}

const AppContainer = styled.div`
  padding: 20px;
`

const Hero = styled.h1`
  font-size: xxx-large;
  color: #5cebff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-weight: lighter
`

const ComponentShowcase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #6cb2ff;
    font-weight: lighter
  }
`

const Divider = styled.hr`
  border: 1px solid #7ff0ff;
  margin: 40px 0 20px 0;

  animation: Glow infinite 2s alternate;
  @keyframes Glow {
    to {
      box-shadow: 0 0 12px 1px #5cebff;
    }
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export default App
