import React, { useState } from 'react'
import styled from '@emotion/styled'

const Button = ({ children, onClick }) => {
  // UI effect
  const [isButtonPressed, setIsButtonPressed] = useState(false)
  return (
    <StyledButton
      onMouseDown={() => setIsButtonPressed(true)}
      onMouseUp={() => setIsButtonPressed(false)}
      style={{
        boxShadow: isButtonPressed && 'inset 0 0 6px rgba(0,0,0,0.3)'
      }}
      onClick={onClick} // <-- we're passing down the callback
    >
      { children }
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: cornflowerblue;
  color: white;
  font-size: 1em;
  vertical-align: middle;
  height: 100%;
  width: 28px;

  // Try playing around with this and see what effect it has!
  transition: box-shadow 0.06s;
`

export default Button