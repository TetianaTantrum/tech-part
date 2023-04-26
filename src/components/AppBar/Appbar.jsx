import { Header, NavLinks, StyledNavLink, Title } from './Appbar.styled';

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
