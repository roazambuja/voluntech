import { ImageIcon, SelectedImage, Picture as StyledPicture, UserIcon } from "./styles";

export interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "profile" | "header" | "mini" | undefined;
}

function Picture({ variant, ...props }: PictureProps): JSX.Element {
  return (
    <StyledPicture variant={variant}>
      {props.src ? (
        <SelectedImage {...props} />
      ) : variant === "header" ? (
        <ImageIcon />
      ) : (
        <UserIcon />
      )}
    </StyledPicture>
  );
}

export { Picture };
