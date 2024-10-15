import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  :last-child {
    margin-bottom: 0;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: contain;
`;
