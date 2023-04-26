import styled from 'styled-components';

export const FilterContainer = styled.div`
  text-align: center;
  background: #fff;
  color: #333;
  padding: 8px 12px;
  border-radius: 4px;
`;
export const FilterLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  text-transform: uppercase;
`;
export const FilterSelect = styled.select`
  font-size: 18px;
  padding: 14px 28px;
  border-radius: 10px;
  border: 1px solid #9926e1;
`;
export const FilterOption = styled.option`
  font-size: 18px;
`;
export const LoadMoreButton = styled.button`
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
