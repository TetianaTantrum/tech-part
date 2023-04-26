import { fetchTweets } from 'components/API';
import TweetsCards from 'components/TweetsCards/TweetsCards';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
        tweets={tweets}
        setFollowing={setFollowing}
        following={following}
      />
      <LoadMoreButton onClick={nextPage}>Load more</LoadMoreButton>
    </div>
  );
}

export default Tweets;

const FilterContainer = styled.div`
  text-align: center;
  background: #fff;
  color: #333;
  padding: 8px 12px;
  border-radius: 4px;
`;
const FilterLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  text-transform: uppercase;
`;

const FilterSelect = styled.select`
  font-size: 18px;
  padding: 14px 28px;
  border-radius: 10px;
  border: 1px solid #9926e1;
`;

const FilterOption = styled.option`
  font-size: 18px;
`;
const LoadMoreButton = styled.button`
  background: linear-gradient(
    114.99deg,
    #9926e1 -0.99%,
    #5736a3 54.28%,
    #7851d3 78.99%
  );
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  width: 196px;
  padding: 14px 28px;
  text-transform: uppercase;
  font: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #f5f5f5;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #d8b4ff;
  }
`;
