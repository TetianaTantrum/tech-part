import React, { useState } from 'react';

import CardFollowButton from 'components/FollowBtn/FollowBtn';
import logo from '../../images/logo.png';
import picture from '../../images/picture.png';
import ellipse from '../../images/ellipse.png';
import {
  CardContainer,
  CardDivider,
  CardEllipse,
  CardFollowCount,
  CardImage,
  CardLogo,
  CardTextWrapper,
  CardTweetCount,
  CardTweetImage,
  CardWrapper,
} from './Tweet.styled';

export const Tweet = ({ tweet, setFollowing, following }) => {
  const [followers, setFollowers] = useState(tweet.followers);

  const numFollowers = followers.toLocaleString('ja-JP');

  const handleClickFollow = arg => {
    setFollowers(PrevFollowers => PrevFollowers + arg);
  };
  return (
    <>
      <CardContainer>
        <CardLogo src={logo} alt="goit-logo" />
        <CardImage src={picture} alt={tweet.user} />
        <CardWrapper>
          <CardDivider />
          <CardEllipse src={ellipse} />
          <CardTweetImage src={tweet.avatar} alt={tweet.user} />
        </CardWrapper>
        <CardTextWrapper>
          <CardTweetCount>{tweet.tweets} tweets</CardTweetCount>
          <CardFollowCount>{numFollowers} followers</CardFollowCount>
          <CardFollowButton
            onClick={handleClickFollow}
            id={tweet.id}
            setFollowing={setFollowing}
            following={following}
          />
        </CardTextWrapper>
      </CardContainer>
    </>
  );
};
export default Tweet;
