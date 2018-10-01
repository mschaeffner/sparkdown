import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #DDD;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
`

const Title = styled.div`
  padding: 5px;
`

const TextArea = styled.textarea`
  padding: 5px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  box-sizing: border-box;
`

export default ({title, content, onContentChanged}) =>
  <Container>

    <Title>
      {title}
    </Title>

    <div style={{flex: 1, padding: '5px', paddingTop: '0'}}>
      <TextArea
        onChange={ev => onContentChanged(ev.target.value)}
        value={content}
      />
    </div>

  </Container>
