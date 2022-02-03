import styled, { keyframes } from 'styled-components';

const animeBottomToTop = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;

  width: 352px;
  height: 32px;
  border-radius: 2px;
  background-color: #F2F2F2;
  padding: 8px 16px;
  margin-bottom: 8px;

  &:nth-child(2) {
    margin-top: 24px;
  }

  opacity: 0;
  transform: translateY(15px);
  animation: ${animeBottomToTop} 0.5s both;

  span {
    line-height: 16px;
    font-size: 14px;
    color: #606060;
  }

  button {
    cursor: pointer;
    border: none;

    img {
      height: 16px;
      width: 12px;
    }
  }
`;