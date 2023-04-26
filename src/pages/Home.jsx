import { Link, Subtitle, Text, Title, Wrapper } from 'components/Home.styled';
import { React } from 'react';

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
