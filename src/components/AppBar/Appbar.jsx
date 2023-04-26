import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const AppBar = () => {
  return (
    <Header>
      <Title>Tweettopia</Title>
      <NavLinks>
        <StyledNavLink exact="true" to="/">
          Home
        </StyledNavLink>
        <StyledNavLink to="/tweets">Tweets</StyledNavLink>
      </NavLinks>
    </Header>
  );
};

export default AppBar;
// const { NavLink } = require('react-router-dom');

// const AppBar = () => {
//   return (
//     <header>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/tweets">Tweets</NavLink>
//     </header>
//   );
// };
// export default AppBar;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 320px;
  background: linear-gradient(
    114.99deg,
    #9926e1 -0.99%,
    #5736a3 54.28%,
    #7851d3 78.99%
  );
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  animation: ${keyframes` from {opacity: 0;}to {  opacity: 1; } `} 1.5s
    ease-in-out;
`;
const NavLinks = styled.div`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`;
