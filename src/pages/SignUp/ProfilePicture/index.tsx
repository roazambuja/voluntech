import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ButtonArea } from "../styles";
import {
  UploadIcon,
  UserIcon,
  ProfilePicture as StyledProfilePicture,
  SelectedImage,
} from "./styles";

interface ProfilePictureProps {
  handleSignUp: () => void;
  previousStep: () => void;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

function ProfilePicture({
  previousStep,
  handleSignUp,
  image,
  setImage,
}: ProfilePictureProps): JSX.Element {
  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <StyledProfilePicture>
        {image ? <SelectedImage src={image} alt="Foto selecionada" /> : <UserIcon />}
      </StyledProfilePicture>
      <Input
        type="file"
        accept="image/*"
        id="picture"
        label={[<UploadIcon key="UploadIcon" />, "Selecionar foto"]}
        onChange={handleUpload}
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
