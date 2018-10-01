import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Body from './Body'
import Fullscreen from 'react-full-screen'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFull: false
    }
  }

  render() {
    return (
      <Container>
        <Header onPresentClicked={() => this.setState({isFull: true})} />
        <Body />

          <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>
            <div style={{background: 'white', height: '100%'}}>
              fullscreen
            </div>
          </Fullscreen>

      </Container>
    )
  }

}
