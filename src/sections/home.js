import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'gatsby-image'

import {
  Wrapper,
  StyledSection,
  Contained,
} from '../components/layout/elements'

import Social from '../components/social'

const Head = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Name = styled(animated.h1)`
  color: #fff;
  font-family: 'Open Sans';
  font-size: 4rem;
  font-weight: 300;
  margin-top: 20px;
`

const SubTitle = styled(animated.h2)`
  color: #fff;
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 2.5rem;
  margin-top: 15px;
`

const ProfilePicture = styled(Img)`
  box-shadow: 0px 5px 12px -1px rgba(73, 73, 73, 1);
  border-radius: 100px;
`

const ArrowWrapper = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  bottom: 0;
  left: 50%;
  margin-bottom: 3rem;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
`

const Arrow = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.text};
`

const Home = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "me_dark.png" }) {
        id
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const ProfileSpring = useSpring({
    config: config.stiff,
    delay: 150,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  })

  const NameSpring = useSpring({
    config: config.stiff,
    delay: 200,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  })

  const SubtitleSpring = useSpring({
    config: config.stiff,
    delay: 250,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  })

  return (
    <StyledSection fullHeight>
      <Contained>
        <Wrapper>
          <Head>
            <animated.div style={ProfileSpring}>
              <ProfilePicture fixed={data.image.childImageSharp.fixed} />
            </animated.div>
            <Name style={NameSpring}>Patrick Sasso</Name>
            <SubTitle style={SubtitleSpring}>FrontEnd Developer</SubTitle>
            <Social />
          </Head>
          <ArrowWrapper>
            <Arrow icon={faChevronDown} />
          </ArrowWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Home
