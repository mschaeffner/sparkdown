import React, { Component } from 'react'
import styled from 'styled-components'
import SplitPane from 'react-split-pane'
import Header from './Header'
import Body from './Body'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default class App extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Body />
      </Container>
    )
  }

}
