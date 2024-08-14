import { useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ProfilePicture as ProfilePictureComponent } from "../../../components/ProfilePicture";
import { ButtonArea } from "../styles";
import { UploadIcon } from "./styles";

interface ProfilePictureProps {
  previousStep: () => void;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}

function ProfilePicture({ previousStep, setImage }: ProfilePictureProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
    const file = event.target.files && event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <ProfilePictureComponent
        src={imageUrl ? imageUrl : undefined}
        alt="Foto do perfil selecionada"
      />
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
        <Button type="submit">Finalizar Cadastro</Button>
      </ButtonArea>
    </>
  );
}

export { ProfilePicture };
