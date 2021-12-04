import React, { useState } from 'react'
import styled from '@emotion/styled'
import logo from '../logo.svg'
import UsefulCounter from './counter/UsefulCounter'

const Spinner = () => {
  // TODO: 'speed' is probably a bad variable name here
  const [speed, setSpeed] = useState(5)
  return (
    <Container>
      <LogoImg src={logo} speed={speed} alt="logo" />
      {/* Why is this needed? */}
      <StackOnTop>
        <UsefulCounter value={speed} onChange={setSpeed} />
      </StackOnTop>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
  height: 180px;
`

const StackOnTop = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
`

const LogoImg = styled.img`
  width: 200px;
  animation: App-logo-spin infinite ${props => props.speed}s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default Spinner