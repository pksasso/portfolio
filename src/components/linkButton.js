import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  background: transparent;
  border-radius: 50px;
  padding: 0.6rem 1.5rem;
  cursor: pointer;
  font-family: 'Open Sans';
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 700;
  border: 1px solid ${(props) => props.theme.colors.text};
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-3px);
    background-color: ${(props) => props.theme.colors.text};
    border-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.main};
  }
`;

const LinkButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default LinkButton;
