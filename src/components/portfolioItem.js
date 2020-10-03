import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import LinkGroup from './linkGroup'

const PortfolioItem = ({ portfolio, html, index }) => {
  const { title, stack, image } = portfolio

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
    clip-path: ${(props) =>
      props.index % 2 === 0
        ? `polygon(0 0%, 100% 4%, 100% 96%, 0% 100%)`
        : `polygon(0 4%, 100% 0, 100% 100%, 0 96%)`};

    background-color: ${(props) =>
      props.index % 2 === 0
        ? props.theme.colors.light
        : props.theme.colors.light};

    @media ${(props) => props.theme.mediaQueries.medium} {
      &:not(:last-child) {
        margin-bottom: 8rem;
      }
    }
    @media ${(props) => props.theme.mediaQueries.small} {
      &:not(:last-child) {
        margin-bottom: 6rem;
      }
    }
  `

  const ContentWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    @media ${(props) => props.theme.mediaQueries.medium} {
      flex-direction: column !important;
    }
  `

  const Title = styled.h1`
    font-weight: 600;
    font-size: 2rem;
    position: relative;
    font-style: italic;
    margin: 0;
    margin-bottom: 3.5rem;
    color: ${(props) => props.theme.colors.text};
    transition: color 0.2s ease-out;
    @media ${(props) => props.theme.mediaQueries.small} {
      margin-bottom: 2rem;
    }
    @media ${(props) => props.theme.mediaQueries.smallest} {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  `

  const Content = styled.div`
    display: flex;
    flex: 1 1 50%;
    flex-direction: column;
    margin: 0 2rem;
    @media ${(props) => props.theme.mediaQueries.medium} {
      order: 2;
      align-items: center;
      text-align: center;
    }
  `

  const Text = styled.div`
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    margin: 0;
    font-family: 'Montserrat';
    margin-bottom: 1rem;
    line-height: 1.7;
    transition: color 0.2s ease-out;
    @media ${(props) => props.theme.mediaQueries.small} {
      font-size: 1.8rem;
    }
  `

  const Stack = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    margin-bottom: 4rem;
    font-size: 1.5rem;
    transition: color 0.2s ease-out;
    @media ${(props) => props.theme.mediaQueries.small} {
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }
  `

  const Image = styled(Img)`
    margin: 0 2rem;
    flex: 1 1 50%;
    @media ${(props) => props.theme.mediaQueries.medium} {
      order: 1;
      width: 100%;
      margin: 0rem;
    }
  `

  return (
    <Wrapper index={index}>
      <Title>{title}</Title>
      <ContentWrapper>
        <Content>
          <Text dangerouslySetInnerHTML={{ __html: html }} />
          <Stack>{stack}</Stack>
          <LinkGroup portfolio={portfolio} />
        </Content>
        <Image fluid={image.childImageSharp.fluid} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default PortfolioItem
