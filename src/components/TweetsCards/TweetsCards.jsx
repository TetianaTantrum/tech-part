import { Tweet } from 'components/Tweet/Tweet';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useRef } from 'react';
import {
  BackButton,
  CardsList,
  CardsListContainer,
} from './TweetsCards.styled';

const TweetsCards = ({ tweets, setFollowing, following }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <CardsListContainer>
        <Link to={backLinkLocationRef.current}>
          <BackButton type="button">
            <HiOutlineArrowNarrowLeft
              style={{
                marginRight: '10px',
              }}
            />
            Back
          </BackButton>
        </Link>
        <CardsList>
          {tweets &&
            tweets.map(tweet => (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                following={following}
                setFollowing={setFollowing}
              />
            ))}
        </CardsList>
      </CardsListContainer>
    </>
  );
};
export default TweetsCards;
