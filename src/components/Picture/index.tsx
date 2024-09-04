import { SelectedImage, ProfilePicture as StyledProfilePicture, UserIcon } from "./styles";

function Picture({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  return (
    <StyledProfilePicture>
      {props.src ? <SelectedImage {...props} /> : <UserIcon />}
    </StyledProfilePicture>
  );
}

export { Picture };
