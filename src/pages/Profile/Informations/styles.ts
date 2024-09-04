import { MapPin } from "react-feather";
import styled from "styled-components";

const ProfileHeader = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    flex-direction: column;
    gap: 8px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    align-items: center;
  }
`;

const DescriptionArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

const LocationArea = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const PinIcon = styled(MapPin)`
  color: ${(props) => props.theme.colors.GREY};
  width: 18px;
  height: 18px;
`;

export { ProfileHeader, HeaderText, DescriptionArea, LocationArea, PinIcon };
