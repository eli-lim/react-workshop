import Counter from './components/Counter'
import styled from '@emotion/styled'

function App() {
  return (
    <AppContainer>
      <div>
        <h1>{ `<Counter />` }</h1>
        <Counter />
      </div>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  padding: 20px;
`

export default App
