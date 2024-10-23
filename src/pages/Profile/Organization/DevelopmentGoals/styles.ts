import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 1rem;
  text-align: center;
`;

const CardsArea = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
`;

export { Container, CardsArea, Image };
