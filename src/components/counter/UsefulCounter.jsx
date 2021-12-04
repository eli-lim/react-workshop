import React, { useState } from 'react'
import styled from '@emotion/styled'
import Button from '../Button'

/**
 * This counter is actually useful since it's not just for display purposes -
 * we can actually use its state (the count value) in other components
 */
const UsefulCounter = ({
  value = 0,
  onChange = () => {},
}) => {
  // Data
  const [count, setCount] = useState(value)

  function handleCountChange(newCount) {
    setCount(newCount)
    onChange(newCount) // Propagate state up to parent component
  }

  return (
    <Container>
      <Button onClick={() => handleCountChange(count - 1)}>
        -
      </Button>
      <div>{ count }</div>
      <Button onClick={() => handleCountChange(count + 1)}>
        +
      </Button>
    </Container>
  )
}

// Install a 'styled components' plugin for your IDE to
// have syntax highlighting
const Container = styled.div`
  display: inline-block;
  font-size: 1.5em;
  background-color: white;
  height: 40px;
  
  // Gives the button rounding effect
  border-radius: 5px;
  overflow: hidden;
  
  // Selectors work too!
  div {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    border: none;
    width: 50px; // TODO: What if the number grows?
    color: black;
  }
`

export default UsefulCounter