import React, { Component } from 'react'
import styled from 'styled-components'


export default () =>
  <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: '#DDD', borderBottom: '1px solid #999'}}>

    <div style={{padding: '5px'}}>
      Markdown editor
    </div>

    <div style={{flex: 1, padding: '5px', paddingTop: '0'}}>
      <textarea
        style={{width: '100%', height: '100%', boxSizing: 'border-box', resize: 'none', outline: 'none'}}
        onChange={ev => console.log(ev.target.value)}
        value={'styles here'}
      />
    </div>


  </div>
