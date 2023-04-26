import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const CardFollowButton = ({ onClick, setFollowing, id }) => {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem('following') || '[]').includes(id)
  );
  const [buttonText, setButtonText] = useState(
    !isFollowing ? 'Follow' : 'Following'
  );
  const CardFollowButtonEl = useRef(null);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
    setButtonText(isFollowing ? 'Follow' : 'Following');

    if (!isFollowing) {
      onClick(1);
      setFollowing(PrevFollowing => [...PrevFollowing, id]);
      const storedFollowing = JSON.parse(
        localStorage.getItem('following') || '[]'
      );
      localStorage.setItem(
        'following',
        JSON.stringify([...storedFollowing, id])
      );
    } else {
      onClick(-1);
      setFollowing(PrevFollowing => PrevFollowing.filter(fId => fId !== id));
      const storedFollowing = JSON.parse(
        localStorage.getItem('following') || '[]'
      );
      localStorage.setItem(
        'following',
        JSON.stringify(storedFollowing.filter(fId => fId !== id))
      );
    }
  };

  useEffect(() => {
    if (CardFollowButtonEl.current) {
      if (!isFollowing) {
        CardFollowButtonEl.current.style.backgroundColor = '#EBD8FF';
        CardFollowButtonEl.current.style.color = '#373737';
      } else {
        CardFollowButtonEl.current.style.backgroundColor = '#5CD3A8';
        CardFollowButtonEl.current.style.color = '#373737';
      }
    }
  }, [isFollowing]);

  const handleMouseOver = () => {
    CardFollowButtonEl.current.textContent = isFollowing
      ? 'Unfollow?'
      : 'Follow?';
  };

  const handleMouseLeave = () => {
    CardFollowButtonEl.current.textContent = buttonText;
  };

  return (
    <FollowButton
      ref={CardFollowButtonEl}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      id={id}
    >
      {buttonText}
    </FollowButton>
  );
};

const FollowButton = styled.button`
  /* background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  ); */
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
  color: #373737;

  &:hover {
    background-color: #d8b4ff;
  }
`;

export default CardFollowButton;
