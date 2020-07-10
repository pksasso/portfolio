import styled from 'styled-components';
import Img from 'gatsby-image';

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
`;

export const Name = styled.h1`
  color: #fff;
  font-family: 'Open Sans';
  font-size: 4rem;
  font-weight: 300;
  margin-top: 20px;
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 2.5rem;
  margin-top: 15px;
`;

export const Post = styled.div`
  display: flex;
  background: #1f1f1f;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 50px;
  clip-path: polygon(0 0%, 100% 4%, 100% 96%, 0% 100%);
`;

export const PlaceHolder = styled.div`
  height: 300px;
  width: 100%;
  background: #fff;
`;

export const WrapperPostText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: red;
  width: 100%;
  background: red;
  box-sizing: border-box;
`;

export const ProfilePicture = styled(Img)`
  box-shadow: 0px 5px 12px -1px rgba(73, 73, 73, 1);
  border-radius: 100px;
`;
