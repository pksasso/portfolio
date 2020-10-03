import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import {
  Wrapper,
  StyledSection,
  Contained,
} from '../components/layout/elements'
import PortfolioItem from '../components/portfolioItem'

const PortfolioWrapper = styled.div`
  width: 100%;
  & > div:nth-child(odd) > div {
    flex-direction: row-reverse;
  }
`

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 2.5rem;
  margin-bottom: 4rem;
`
const Portfolio = () => {
  const { allMarkdownRemark: items } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___image___dir] }
        ) {
          edges {
            node {
              id
              frontmatter {
                android
                apple
                live
                source
                stack
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
              html
              excerpt
            }
          }
        }
      }
    `
  )

  return (
    <StyledSection>
      <Contained>
        <Wrapper>
          <Title>Portfólio</Title>
          <PortfolioWrapper>
            {items.edges.map((item, index) => (
              <PortfolioItem
                key={item.node.id}
                portfolio={item.node.frontmatter}
                html={item.node.html}
                index={index}
              />
            ))}
          </PortfolioWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Portfolio
