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

const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
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

const Button = styled(ContactButton)<{ participates: boolean }>`
  background-color: ${(props) =>
    props.participates ? props.theme.colors.WHITE : props.theme.colors.PRIMARY};
  border: ${(props) => props.participates && `1px solid ${props.theme.colors.SECONDARY}`};
  color: ${(props) => props.participates && props.theme.colors.SECONDARY};

  &:disabled {
    cursor: auto;
  }
`;

export { Header, Icon, ButtonsArea, ContactButton, Button };
