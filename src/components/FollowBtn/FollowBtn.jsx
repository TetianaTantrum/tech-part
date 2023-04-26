import { useEffect, useRef, useState } from 'react';
import { FollowButton } from './FollowBtn.styled';

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

export default CardFollowButton;
