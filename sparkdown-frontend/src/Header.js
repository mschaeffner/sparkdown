import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const Header = styled.div`
  background-color: #2196f3;
  padding: 10px;
`

export default () =>
  <Header>

  <Button variant="contained" size="small">
    <PlayArrowIcon style={{fontSize: '18px'}} /> Present
  </Button>

  </Header>
