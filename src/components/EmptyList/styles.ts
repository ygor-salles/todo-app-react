import styled, { keyframes } from "styled-components";

const animeBottomToTop = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const ContainerEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #F2F2F2;
  border: 1px dashed #CCCCCC;
  height: 280px;
  width: 352px;
  margin-top: 24px;

  opacity: 0;
  transform: translateX(20px);
  animation: ${animeBottomToTop} 0.5s both;

  span {
    color: #606060;
    line-height: 14.06px;
    font-size: 12px;
    font-weight: 400;
  }
`;
