import React from 'react';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useTrail, animated, config } from 'react-spring';

import SocialItem from './socialItem';

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Social = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            linkedin
            github
            email
          }
        }
      }
    }
  `);
  const LINKS = [
    {
      name: site.siteMetadata.social.github,
      label: 'Github',
      link: 'https://github.com',
      icon: faGithub,
    },
    {
      name: site.siteMetadata.social.linkedin,
      label: 'Linkedin',
      link: 'https://www.linkedin.com/in',
      icon: faLinkedinIn,
    },
  ];

  const socialItemsTrail = useTrail(LINKS.length, {
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
      display: 'flex',
      cursor: 'pointer',
    },
  });

  return (
    <div>
      <SocialWrapper>
        {socialItemsTrail.map((propsStyle, index) => (
          <animated.div key={LINKS[index].label} style={propsStyle}>
            <SocialItem
              key={LINKS[index]}
              link={`${LINKS[index].link}/${LINKS[index].name}`}
              icon={LINKS[index].icon}
            />
          </animated.div>
        ))}
      </SocialWrapper>
    </div>
  );
};

export default Social;
