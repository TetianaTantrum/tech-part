import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 460px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: 'Montserrat';
  font-weight: 500;
  text-transform: uppercase;
  color: #ebd8ff;
  background: url(logo) top 20px left 20px, url(picture) center,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
export const CardLogo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  margin-left: 20px;
  z-index: 1;
`;
export const CardImage = styled.img`
  width: 308px;
  height: 168px;
  z-index: 0;
  margin: 8px 36px 18px 36px;
`;
export const CardDivider = styled.div`
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const CardEllipse = styled.img`
  position: relative;
  top: -45px;
  left: center;
`;
export const CardTweetImage = styled.img`
  position: relative;
  top: -125px;
  width: 63px;
  height: 63px;

  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardTextWrapper = styled.div`
  position: relative;
  top: -62px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardTweetCount = styled.span`
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 24px;
`;
export const CardFollowCount = styled.span`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 26px;
`;
