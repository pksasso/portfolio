import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faAppStoreIos,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons'

import LinkButton from './linkButton'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media ${(props) => props.theme.mediaQueries.medium} {
  }
`
const Icon = styled(FontAwesomeIcon)`
  color: inherit;
  margin-right: 0.5rem;
`

export default function LinkGroup({ portfolio }) {
  const { android, apple, live, source } = portfolio
  return (
    <Wrapper>
      {source.length !== 0 ? (
        <LinkButton href={source} target="_blank" rel="noreferrer">
          <Icon icon={faGithub} />
          Github
        </LinkButton>
      ) : null}

      {live.length !== 0 ? (
        <LinkButton href={live} target="_blank" rel="noreferrer">
          <Icon icon={faLink} />
          Live
        </LinkButton>
      ) : null}

      {android.length !== 0 ? (
        <LinkButton href={android} target="_blank" rel="noreferrer">
          <Icon icon={faGooglePlay} />
          Play Store
        </LinkButton>
      ) : null}

      {apple.length !== 0 ? (
        <LinkButton href={apple} target="_blank" rel="noreferrer">
          <Icon icon={faAppStoreIos} />
          Apple Store
        </LinkButton>
      ) : null}
    </Wrapper>
  )
}
