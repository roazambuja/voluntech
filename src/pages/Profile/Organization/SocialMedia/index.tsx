import { Divider } from "../../../../components/Divider";
import { Container, SocialMediaLogo } from "./styles";
import { SocialMediaInterface } from "../../../../services/socialMedia";
import Facebook from "../../../../assets/social-media/facebook.png";
import WhatsApp from "../../../../assets/social-media/whatsapp.png";
import Instagram from "../../../../assets/social-media/instagram.png";
import TikTok from "../../../../assets/social-media/tiktok.png";

interface SocialMediaProps {
  socialMedia: SocialMediaInterface | undefined;
}

function SocialMedia({ socialMedia }: SocialMediaProps): JSX.Element {
  return (
    <>
      {socialMedia && (
        <>
          <Divider text="contato" />
          <Container>
            {socialMedia?.whatsapp && (
              <a
                target="_blank"
                href={`https://wa.me/55${socialMedia.whatsapp}?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20da%20aplica%C3%A7%C3%A3o%20Voluntech%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20oportunidades%20de%20voluntariado.`}
              >
                <SocialMediaLogo src={WhatsApp} />
              </a>
            )}
            {socialMedia?.instagram && (
              <a target="_blank" href={`https://www.instagram.com/${socialMedia.instagram}`}>
                <SocialMediaLogo src={Instagram} />
              </a>
            )}
            {socialMedia?.facebook && (
              <a target="_blank" href={socialMedia.facebook}>
                <SocialMediaLogo src={Facebook} />
              </a>
            )}
            {socialMedia?.tiktok && (
              <a target="_blank" href={`https://www.tiktok.com/@${socialMedia.tiktok}`}>
                <SocialMediaLogo src={TikTok} />
              </a>
            )}
          </Container>
        </>
      )}
    </>
  );
}

export { SocialMedia };
