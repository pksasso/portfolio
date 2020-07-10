import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faAppStoreIos,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';

import LinkButton from './linkButton';

const PortfolioItem = ({ portfolio, html, index }) => {
  const { title, live, android, apple, source, stack, image } = portfolio;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-right: 20em;
    padding-left: 20em;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: ${(props) =>
      props.index % 2 === 0 && props.theme.colors.light};
    clip-path: ${(props) =>
      props.index % 2 === 0 && `polygon(0 0%, 100% 4%, 100% 96%, 0% 100%)`};
  `;

  const Content = styled.div`
    display: flex;
    flex: 1 1 50%;
    flex-direction: column;
    margin: 2rem;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
  `;

  const Title = styled.h1`
    font-size: 2.2rem;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-bottom: 3rem;
    color: ${(props) => props.theme.colors.text};
  `;

  const Image = styled(Img)`
    margin: 0 2rem;
    flex: 1 1 50%;
    box-shadow: 0px 8px 32px -14px rgba(255, 255, 255, 0.3);
  `;

  const Description = styled.div`
    font-family: 'Montserrat';
    font-size: 1.5rem;
    line-height: 2rem;

    color: ${(props) => props.theme.colors.text};
  `;

  const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;

  const Icon = styled(FontAwesomeIcon)`
    color: inherit;
    margin-right: 0.5rem;
  `;

  const Stack = styled.div`
    color: ${(props) => props.theme.colors.text};
    font-family: 'Montserrat';
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  `;

  return (
    <Wrapper index={index}>
      <Title>{title}</Title>
      <ContentWrapper>
        <Content>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
          <Stack>{stack}</Stack>
          <ButtonsWrapper>
            {live.length !== 0 ? (
              <LinkButton href={live} target="_blank" rel="noreferrer">
                <Icon icon={faLink} />
                Live
              </LinkButton>
            ) : null}

            {source.length !== 0 ? (
              <LinkButton href={source} target="_blank" rel="noreferrer">
                <Icon icon={faGithub} />
                Github
              </LinkButton>
            ) : null}

            {apple.length !== 0 ? (
              <LinkButton href={apple} target="_blank" rel="noreferrer">
                <Icon icon={faAppStoreIos} />
                Apple Store
              </LinkButton>
            ) : null}
            {android.length !== 0 ? (
              <LinkButton href={android} target="_blank" rel="noreferrer">
                <Icon icon={faGooglePlay} />
                Play Store
              </LinkButton>
            ) : null}
          </ButtonsWrapper>
        </Content>
        <Image fluid={image.childImageSharp.fluid} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default PortfolioItem;
