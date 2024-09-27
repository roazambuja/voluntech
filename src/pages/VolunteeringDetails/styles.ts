import styled from "styled-components";

const Header = styled.div<{ color: string }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const Icon = styled.svg`
  color: ${(props) => props.theme.colors.WHITE};
  height: 30px;
  width: 30px;
`;

const ContactButton = styled.a`
  display: flex;
  gap: 6px;
  font-size: 16px;
  background-color: #25d366;
  color: ${(props) => props.theme.colors.WHITE};
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  border-radius: 24px;
  width: fit-content;
  align-items: center;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export { Header, Icon, ContactButton };
