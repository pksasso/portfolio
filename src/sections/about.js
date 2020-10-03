import React from 'react'
import styled from 'styled-components'

import { Wrapper, Contained } from '../components/layout/elements'

const AboutWrapper = styled(Wrapper)`
  width: 100%;
  line-height: 2.5rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 1.8rem;
`

const Title = styled.h1`
  width: max;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 3rem;
  font-size: 2.5rem;
`

const Paragraph = styled.p`
  margin-bottom: 2rem;
`

const About = () => {
  return (
    <Wrapper>
      <Contained>
        <AboutWrapper>
          <Title>Sobre mim</Title>
          <Paragraph>
            Iniciei meus estudos de desenvolvimento na faculdade onde participei
            de um grupo de extensão focado em desenvolver aplicativos para
            celular. Lá desenvolvi junto com uma equipe dois aplicativos,
            InfoProvas e REDEsing, além de aprender a usar ferramentas de
            versionamento de código e a trabalhar em equipe
          </Paragraph>
          <Paragraph>
            Com o tempo fui me interessando por desenvolvimento web e fiz alguns
            cursos online como React - The Complete Guide e Gatsby Bootcamp .
            Com esses conhecimentos começei meu primeiro projeto solo,o Movie
            Library, onde a maior parte das coisas tive que estudar sozinho
          </Paragraph>
          <Paragraph>
            Desde então tenho focado meus estudos na área de front-end me
            forçando a aprender cada vez mais.
          </Paragraph>
        </AboutWrapper>
      </Contained>
    </Wrapper>
  )
}

export default About
