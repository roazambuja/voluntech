import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ButtonArea } from "../styles";
import { UploadIcon, UserIcon, ProfilePicture as StyledProfilePicture } from "./styles";

interface ProfilePictureProps {
  handleSignUp: () => void;
  previousStep: () => void;
}

function ProfilePicture({ previousStep, handleSignUp }: ProfilePictureProps): JSX.Element {
  return (
    <>
      <StyledProfilePicture>
        <UserIcon />
      </StyledProfilePicture>
      <Input
        type="file"
        accept="image/*"
        id="picture"
        label={[<UploadIcon key="UploadIcon" />, "Selecionar foto"]}
      />
      <ButtonArea>
        <Button type="button" variant="secondary" onClick={previousStep}>
          Voltar
        </Button>
        <Button type="button" onClick={handleSignUp}>
          Finalizar Cadastro
        </Button>
      </ButtonArea>
    </>
  );
}

export { ProfilePicture };
