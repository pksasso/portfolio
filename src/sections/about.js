import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  margin-top: 14rem;
  line-height: 2.5rem;
  text-align: center;
  padding: 0 20rem;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 1.8rem;
`;

const Title = styled.h1`
  width: max;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Montserrat';
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <Wrapper>
      <Title>Sobre mim</Title>
      <Paragraph>
        Iniciei meus estudos de desenvolvimento na faculdade onde participei de
        um grupo de extensão focado em desenvolver aplicativos para celular
        chamado DevMob. La desenvolvi junto com uma equipe dois aplicativos,
        InfoProvas e REDEsing, além de aprender a usar ferramentas de
        versionamento de código e a trabalhar em equipe
      </Paragraph>
      <Paragraph>
        Com o tempo fui me interessando por desenvolvimento web e fiz alguns
        cursos online como React - The Complete Guide e Gatsby Bootcamp . Com
        esses conhecimentos começei meu primeiro projeto solo,o Movie Library,
        onde a maior parte das coisas tive que estudar sozinho
      </Paragraph>
      <Paragraph>
        Desde então continuo estudando e gostando cada vez mais de aprender
        sobre Front End
      </Paragraph>
    </Wrapper>
  );
};

export default About;
