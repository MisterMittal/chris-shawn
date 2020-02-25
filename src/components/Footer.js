import React, { Component } from 'react'
import { Container, Row, FlexWrapper } from './'
import styled from 'styled-components'
import { FootSocialData } from '../data'

const FooterStyle = styled.footer`
  background: #191821;
  padding: 100px 0;

  & > div {
    position: relative;
  }
`

const FootSocialStyle = styled.article`
  width: 65px;
  height: 65px;
  margin: 15px;
  border: 1px solid #24232c;
  transition: all 0.5s;

  & :hover {
    border-color: #81a846;
  }

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & i {
    color: #81a846;
    font-size: 27px;
  }
`

const ToTop = styled.div`
  position: absolute;
  width: 65px;
  height: 65px;
  border: 1px solid #81a846;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto 15px auto 0;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    width: unset;
  }
`

class FootSocial extends Component {
  render() {
    return (
      <FootSocialStyle>
        <a href="#">
          <i className={this.props.data.iconClass} />
        </a>
      </FootSocialStyle>
    )
  }
}

export class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <Container>
          <FlexWrapper>
            <p>2018 © Chris Shawn Personal Template. All rights reserved.</p>
            <Row>
              {FootSocialData.map(item => (
                <FootSocial data={item} />
              ))}
            </Row>
          </FlexWrapper>
          <ToTop>
            <a href="#top-section">
              <img src={require('../images/totop.png')} />
            </a>
          </ToTop>
        </Container>
      </FooterStyle>
    )
  }
}
