import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.text};
  margin: 0 0.5rem;
  transition: all 0.2s ease-out;

  :hover {
    background-color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.main};
    transform: translateY(-3px);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2.5rem;
  transition: color 0.2s ease-out;

  ${StyledLink}:hover & {
    color: #121212;
  }
`;

const SocialItem = ({ link, label, icon }) => {
  return (
    <StyledLink target="_blank" aria-label={label} href={link}>
      <StyledIcon icon={icon} />
    </StyledLink>
  );
};

export default SocialItem;
