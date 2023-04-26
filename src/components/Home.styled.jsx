import styled, { keyframes } from 'styled-components';
export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #5cd3a8;
  margin-bottom: 20px;
  animation: ${keyframes`
    from {
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `} 1.5s ease-in-out;
`;
export const Subtitle = styled.h3`
  color: #fba3b3;
  animation: ${keyframes`
    from {opacity: 0;}to {opacity: 1;}`} 1.5s ease-in-out;
`;
export const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
  animation: ${keyframes`
    from {
      transform: translateX(50%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `} 1.5s ease-in-out;
`;
export const Link = styled.a`
  color: #1da1f2;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
