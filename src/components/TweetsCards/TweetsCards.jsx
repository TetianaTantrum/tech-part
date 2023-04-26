import { Tweet } from 'components/Tweet/Tweet';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import styled from 'styled-components';
import { useRef } from 'react';

const TweetsCards = ({
  tweets,
  setFollowing,
  following,
  follow,
  setFollow,
}) => {
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
                // follow={follow}
                // setFollow={setFollow}
              />
            ))}
        </CardsList>
      </CardsListContainer>
    </>
  );
};
export default TweetsCards;

// import { Tweet } from 'components/Tweet/Tweet';
// import { Link, useLocation } from 'react-router-dom';
// import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
// import styled from 'styled-components';
// import { useRef } from 'react';

// const TweetsCards = ({
//   tweets,
//   setFollowing,
//   following,
//   follow,
//   setFollow,
// }) => {
//   const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/');

//   return (
//     <>
//       <CardsListContainer>
//         <Link to={backLinkLocationRef.current}>
//           <BackButton type="button">
//             <HiOutlineArrowNarrowLeft
//               style={{
//                 marginRight: '10px',
//               }}
//             />
//             Back
//           </BackButton>
//         </Link>
//         <CardsList>
//           {tweets &&
//             tweets.map(tweet => (
//               <Tweet
//                 key={tweet.id}
//                 tweet={tweet}
//                 following={following}
//                 setFollowing={setFollowing}
//                 // follow={follow}
//                 // setFollow={setFollow}
//               />
//             ))}
//         </CardsList>
//       </CardsListContainer>
//     </>
//   );
// };
// export default TweetsCards;

const CardsListContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const CardsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const BackButton = styled.button`
  position: fixed;
  z-index: 10;
  top: 50px;
  left: 5%;
  background: linear-gradient(
    114.99deg,
    #9926e1 -0.99%,
    #d8c8ff 54.28%,
    #8670ba 78.99%
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
