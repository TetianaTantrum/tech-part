import { fetchTweets } from 'components/API';
import {
  FilterContainer,
  FilterLabel,
  FilterOption,
  FilterSelect,
  LoadMoreButton,
} from 'components/Tweets.styled';
import TweetsCards from 'components/TweetsCards/TweetsCards';
import { useEffect, useMemo, useState } from 'react';

function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState([]);
  const [filter, setFilter] = useState('show all');

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const visibleTweets = useMemo(() => {
    let filteredTweets = [];

    switch (filter) {
      case 'show all':
        filteredTweets = tweets;
        break;
      case 'follow':
        filteredTweets = tweets.filter(tweet => !following.includes(tweet.id));
        break;
      case 'following':
        filteredTweets = tweets.filter(tweet => following.includes(tweet.id));
        break;
      default:
        filteredTweets = tweets;
    }

    return filteredTweets;
  }, [filter, tweets, following]);

  useEffect(() => {
    if (page === 1) {
      async function getInitialTweets() {
        try {
          const tweetsList = await fetchTweets(1);
          setTweets(tweetsList);
        } catch (error) {}
      }
      getInitialTweets();
    }
  }, [page]);

  useEffect(() => {
    if (page >= 2) {
      async function getTweets() {
        try {
          const tweetsList = await fetchTweets(page);
          setTweets(prevTweets => [...prevTweets, ...tweetsList]);
        } catch (error) {}
      }
      getTweets();
    }
  }, [page]);

  return (
    <div>
      <title>Tweets</title>
      <FilterContainer>
        <FilterLabel htmlFor="filter">Filter:</FilterLabel>
        <FilterSelect id="filter" value={filter} onChange={handleFilterChange}>
          <FilterOption value="show all">Show all</FilterOption>
          <FilterOption value="follow">Follow</FilterOption>
          <FilterOption value="following">Following</FilterOption>
        </FilterSelect>
      </FilterContainer>
      <TweetsCards
        tweets={visibleTweets}
        setFollowing={setFollowing}
        following={following}
      />
      <LoadMoreButton onClick={nextPage}>Load more</LoadMoreButton>
    </div>
  );
}

export default Tweets;
