import { SelectedImage, ProfilePicture as StyledProfilePicture, UserIcon } from "./styles";

export interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "profile" | "header" | undefined;
}

function Picture({ variant, ...props }: PictureProps): JSX.Element {
  return (
    <StyledProfilePicture>
      {props.src ? <SelectedImage {...props} /> : <UserIcon />}
    </StyledProfilePicture>
  );
}

export { Picture };
