import React, { Component } from 'react'
import styled from 'styled-components'

const HeadContentStyle = styled.div`
  padding: 0 20% 0 10%;
  position: relative;

  & ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 7%;
    height: 27px;
    background: #fff;
  }
`

export class HeadContent extends Component {
  render() {
    return (
      <HeadContentStyle>
        <h1>{this.props.data.heading}</h1>
        {this.props.data.paragraph && <p>{this.props.data.paragraph}</p>}
      </HeadContentStyle>
    )
  }
}
