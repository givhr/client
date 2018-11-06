import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
  handleClick = () => {
    console.log('button is clicking')
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.buttonText}</button>
  }
}

export default Button

const Button = styled.button`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  &:hover {
    cursor: pointer;
  }
`
