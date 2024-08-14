import { SelectedImage, ProfilePicture as StyledProfilePicture, UserIcon } from "./styles";

function ProfilePicture({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  return (
    <StyledProfilePicture>
      {props.src ? <SelectedImage {...props} /> : <UserIcon />}
    </StyledProfilePicture>
  );
}

export { ProfilePicture };
