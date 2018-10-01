import React from 'react'
import styled from 'styled-components'
import SplitPane from 'react-split-pane'
import Paper from '@material-ui/core/Paper'
import Editor from './Editor'
import ReactMarkdown from 'react-markdown'

const SLIDE_BREAK_PATTERN = /\n {0,3}[-_*]{3,} *\n/

const Container = styled.div`
  flex-grow: 1;
  position: relative;
`

export default class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      style: ''
    }
  }

  render() {
    const slides = this.state.markdown.split(SLIDE_BREAK_PATTERN)
    return(
      <Container>
        <SplitPane split="vertical" defaultSize={'50%'}>

          <SplitPane split="horizontal" defaultSize={'50%'}>

            <Editor
              title='Markdown'
              content={this.state.markdown}
              onContentChanged={content => this.setState({markdown: content})}
            />

            <Editor
              title='Styles'
              content={this.state.styles}
              onContentChanged={content => this.setState({styles: content})}
            />

          </SplitPane>


          <div style={{overflow: 'auto', height: '100%'}}>
            {slides.map((slide, index) =>
              <div key={index} style={{position: 'relative', width: '100%', paddingTop: '75%'}}>
                <Paper elevation={1} style={{ padding: 20, position: 'absolute', top: 25, left: 25, bottom: 25, right: 25}}>
                  <ReactMarkdown source={slide} />
                </Paper>
              </div>
            )}
          </div>

        </SplitPane>
      </Container>
    )
  }

}
