import { React } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
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
const Subtitle = styled.h3`
  color: #fba3b3;
  animation: ${keyframes`
    from {opacity: 0;}to {opacity: 1;}`} 1.5s ease-in-out;
`;
const Text = styled.p`
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

const Link = styled.a`
  color: #1da1f2;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Home() {
  return (
    <div>
      <title>Home</title>
      <Wrapper>
        <Title> Tweettopia </Title>
        <Subtitle>your new favourite social network</Subtitle>
        <Text>
          Introducing Tweettopia - the ultimate social networking platform for
          people who love to share their thoughts and ideas in short, snappy
          tweets!
        </Text>
        <Text>
          With Tweettopia, you can connect with people from all over the world,
          follow them or unfollow, if you are no longer interested. Our powerful
          search tools make it easy to find other tweets and tweets that are
          relevant to your interests.
        </Text>
        <Text>
          You can even create lists of tweets to follow, ensuring that you never
          miss out on the latest news and updates from your favorite accounts.
        </Text>
        <Text>
          So what are you waiting for? <Link href="/tweets">Join </Link>
          Tweettopia today and start tweeting your way to a more connected and
          engaged social network experience!
        </Text>
      </Wrapper>
    </div>
  );
}
