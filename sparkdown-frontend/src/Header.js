import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const Header = styled.div`
  background-color: #2196f3;
  padding: 10px;
`

export default ({onPresentClicked}) =>
  <Header>

  <Button variant="contained" size="small" onClick={() => onPresentClicked()}>
    <PlayArrowIcon style={{fontSize: '18px'}} /> Present
  </Button>

  </Header>
