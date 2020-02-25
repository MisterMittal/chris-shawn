import React, { Component, Fragment } from 'react'
import { Header, FlexWrapper, Container, Row, HeadContent, Footer } from '../components'
import styled from 'styled-components'
import chrisShawn1 from '../images/chris-shawn-1.png'
import {
  aboutData,
  skillsData,
  skillsItemData,
  experienceData,
  experienceItemData,
  portfolioData,
  servicesData,
  serviceItemsData,
  processData,
  ProcessItemsData,
  blogData,
  clientsData,
  ClientsItemsData,
  contactData,
  ContactItemsData
} from '../data'

const TopSection = styled.section`
  height: 100vh;
  background: url(${chrisShawn1});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #c8c4c0;

  & h1 {
    color: #c8c4c0;
    font-size: 65px;
    letter-spacing: unset;
  }

  & a {
    display: inline-block;
    margin: 10px 0;
    border: 1px solid;
    padding: 10px 60px;
    font-size: 15px;
  }
`

const AboutSection = styled.section`
  background: #282631;
  padding: 80px 0;
`
const AboutOuter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 0;
`

const AboutLateral = styled.div`
  width: 30%;

  & :nth-of-type(2) {
    width: 67%;
  }

  & img {
    height: 100%;
    object-fit: cover;
  }

  & p:first-of-type {
    font-size: 32px;
    padding-bottom: 16px;
    color: #fff;

    & span {
      color: #99be62;
      font-weight: bold;
    }
  }
`

const SkillsSection = styled.section`
  background-color: #282631;
`

const SkillsItemStyle = styled.article`
  margin: 15px;
  width: calc(33% - 30px);
`

const ExperienceSection = styled.section`
  background: #282631;
  padding: 30px 0 80px;

  & > div > div:nth-of-type(2) {
    padding-left: 20px;
  }
`

const ExperienceItemStyle = styled.article`
  margin: 15px;
  border: 1px solid #30303d;
  width: calc(50% - 30px);
  height: 125px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  & div {
    display: flex;
    flex-direction: column;
  }

  & ::before {
    position: absolute;
    content: '';
    height: 40px;
    width: 40px;
    background: pink;
    left: -20px;
  }
`

const SignWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;

  & img {
    width: unset;
  }
`

const PortfolioSection = styled.section`
  background: #25232e;
  padding: 80px 0;
`

const ServicesSection = styled.section`
  background: #22202b;
  padding: 80px 0 0;
`

const ServiceItemStyle = styled.article`
  margin: 15px;
  width: calc(50% - 30px);
  border: 1px solid #30303d;
  display: flex;

  & > div:nth-of-type(1) {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-of-type(2) {
    width: 75%;
    padding: 15px 15px 15px 30px;
  }

  & img {
    width: unset;
  }
`

const ProcessSection = styled.section`
  background: #22202b;
  padding: 80px 0;
`

const ProcessItemStyle = styled.article`
  margin: 15px;
  width: calc(25% - 30px);
`

const BlogSection = styled.section`
  background: #201e29;
  padding: 80px 0 120px;
`
const ClientsSection = styled.section`
  background: #1d1c26;
  padding: 80px 0;
`

const ClientsItemStyle = styled.article`
  margin: 15px;
  width: calc(25% - 30px);
  height: 90px;
  border: 1px solid #24232c;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: unset;
  }

  & :hover {
    border-color: #81a846;
  }
`

const ContactSection = styled.section`
  background: #1b1a24;
  padding: 80px 0;
`

const ContactItemStyle = styled.article`
  margin: 15px;
  width: calc(33% - 30px);
  height: 150px;
  border: 1px solid #24232c;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  & :hover {
    border-color: #81a846;

    & i {
      transform: translate(0, -300%);
    }

    & div {
      transform: none;
    }
  }

  & i {
    font-size: 40px;
    color: #81a846;
    transition: all 0.5s;
  }
  & div {
    transform: translate(0, -300%);
    position: absolute;
    transition: all 0.7s;

    & p {
      color: #81a846;
    }
  }
`

const ContactLateral = styled.div`
  width: calc(50% - 30px);
  margin: 0 15px;

  & input,
  textarea {
    width: 100%;
    height: 50px;
    margin: 15px 0;
    padding: 0 15px;
    background: #1b1a24;
    color: #555;
    font-size: 14px;
    border: 1px solid #2d2b36;
    transition: all 0.5s;

    & :focus {
      border-color: #81a846;
      outline: none;
    }
  }

  & textarea {
    height: 130px;
    resize: none;
    padding: 15px;
    display: block;
  }

  & input[type='submit'] {
    color: #fff;
    transition: all 1s;

    & :hover {
      background: #81a846;
      cursor: pointer;
    }
  }
`

class SkillsItem extends Component {
  render() {
    const themeColorStyle = { color: this.props.data.themeColor }
    return (
      <SkillsItemStyle>
        <h2 style={themeColorStyle}>{this.props.data.heading}</h2>
        <p>{this.props.data.paragraph}</p>
      </SkillsItemStyle>
    )
  }
}

class ExperienceItem extends Component {
  render() {
    const themeColorStyle = { color: this.props.data.themeColor }
    return (
      <ExperienceItemStyle>
        <div style={themeColorStyle}>
          <span>
            <b>{this.props.data.position}</b>
          </span>
          <span>
            <b>{this.props.data.duration}</b>
          </span>
        </div>
        <div>
          <span>
            <b>{this.props.data.organisation}</b>
          </span>
          <span>{this.props.data.url}</span>
        </div>
      </ExperienceItemStyle>
    )
  }
}

class ServiceItem extends Component {
  render() {
    const themeColorStyle = {
      background: this.props.data.themeColor
    }
    return (
      <ServiceItemStyle>
        <div style={themeColorStyle}>
          <img src={this.props.data.icon} />
        </div>
        <div>
          <h2>{this.props.data.heading}</h2>
          <span>{this.props.data.paragraph}</span>
        </div>
      </ServiceItemStyle>
    )
  }
}

class ProcessItem extends Component {
  render() {
    const divStyle = {
      background: this.props.data.themeColor,
      padding: '25px 35px',
      marginBottom: '10px'
    }

    return (
      <ProcessItemStyle>
        <FlexWrapper>
          <div style={divStyle}>
            <img src={this.props.data.icon} />
          </div>
          <h2>{this.props.data.heading}</h2>
          <p>{this.props.data.paragraph}</p>
        </FlexWrapper>
      </ProcessItemStyle>
    )
  }
}

class ClientsItem extends Component {
  render() {
    return (
      <ClientsItemStyle>
        <img src={this.props.data} />
      </ClientsItemStyle>
    )
  }
}

class ContactItem extends Component {
  render() {
    return (
      <ContactItemStyle>
        <FlexWrapper>
          <p>{this.props.data.type}</p>
          <span>{this.props.data.value}</span>
        </FlexWrapper>
        <i className={this.props.data.iconClass} />
      </ContactItemStyle>
    )
  }
}

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <TopSection id="top-section">
          <Container>
            <h1>CHRIS SHAWN</h1>
            <p>
              Mystery is at the heart of creativity.
              <br />
              That, and surprise.
            </p>
            <a href="#">MORE</a>
          </Container>
        </TopSection>

        <AboutSection>
          <Container>
            <HeadContent data={aboutData} />
            <AboutOuter>
              <AboutLateral>
                <img src={require('../images/chris-shawn-2.png')} />
              </AboutLateral>
              <AboutLateral>
                <p>
                  Hello world, I am <span>Chris Shawn</span>
                  <br />
                  graphic & web designer
                </p>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
                  molestie venenatis nunc, ac vestibulum est pellentesque at. Duis quam lorem, malesuada vitae ipsum
                  vel, accumsan maximus tellus. Suspendisse sit amet erat erat. Nulla vel tincidunt est. Sed eu nibh
                  tempor, convallis magna quis, dignissim arcu. Pellentesque sed posuere mauris. Duis sit amet mi mi.
                  Nam hendrerit lacus eget turpis dapibus finibus.
                </p>
                <p>
                  Maecenas dignissim elit eu posuere dignissim. Nullam blandit, erat vitae dictum mollis, nulla erat
                  fermentum sem, vitae vehicula lorem nisl eget eros. Maecenas aliquam viverra sodales.Nulla sagittis
                </p>
              </AboutLateral>
            </AboutOuter>
          </Container>
        </AboutSection>

        <SkillsSection>
          <Container>
            <HeadContent data={skillsData} />
            <Row>
              {skillsItemData.map(item => (
                <SkillsItem data={item} />
              ))}
            </Row>
          </Container>
        </SkillsSection>

        <ExperienceSection>
          <Container>
            <HeadContent data={experienceData} />
            <Row>
              {experienceItemData.map(item => (
                <ExperienceItem data={item} />
              ))}
            </Row>
            <SignWrapper>
              <img src={require('../images/signature.png')} />
            </SignWrapper>
          </Container>
        </ExperienceSection>

        <PortfolioSection>
          <Container>
            <HeadContent data={portfolioData} />
          </Container>
        </PortfolioSection>

        <ServicesSection>
          <Container>
            <HeadContent data={servicesData} />
            <Row>
              {serviceItemsData.map(item => (
                <ServiceItem data={item} />
              ))}
            </Row>
          </Container>
        </ServicesSection>

        <ProcessSection>
          <Container>
            <HeadContent data={processData} />
            <Row>
              {ProcessItemsData.map(item => (
                <ProcessItem data={item} />
              ))}
            </Row>
          </Container>
        </ProcessSection>

        <BlogSection>
          <Container>
            <HeadContent data={blogData} />
          </Container>
        </BlogSection>

        <ClientsSection>
          <Container>
            <HeadContent data={clientsData} />
            <Row>
              {ClientsItemsData.map(item => (
                <ClientsItem data={item} />
              ))}
            </Row>
          </Container>
        </ClientsSection>

        <ContactSection>
          <Container>
            <HeadContent data={contactData} />
            <Row>
              {ContactItemsData.map(item => (
                <ContactItem data={item} />
              ))}
            </Row>
            <form action="https://formcarry.com/s/Zkp_82mv0NG" method="POST" accept-charset="UTF-8" >
              <Row>
                <ContactLateral>
                  <input type="text" placeholder="NAME" name />
                  <input type="text" placeholder="E-MAIL" name="e-mail" />
                  <input type="text" placeholder="PHONE" name="phone" />
                </ContactLateral>
                <ContactLateral>
                  <textarea placeholder="MESSAGE" name="message" />
                  <input type="submit" value="SEND" />
                </ContactLateral>
              </Row>
            </form>
          </Container>
        </ContactSection>
        <Footer />
      </Fragment>
    )
  }
}
