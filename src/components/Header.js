import React, { Component } from 'react'
import { Container, Row } from './'
import styled from 'styled-components'
import { headerList } from '../data'

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  color: #f5f5f5;
  transition: all 0.3s;
`

export class Header extends Component {
  render() {
    return (
      <HeaderStyle id="primary-header">
        <Container>
          <Row>
            <nav>
              <ul>
                {headerList.map(item => (
                  <li>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </Row>
        </Container>
      </HeaderStyle>
    )
  }
}
