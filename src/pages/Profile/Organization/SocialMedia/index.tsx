import { Divider } from "../../../../components/Divider";
import { Container, SocialMediaLogo } from "./styles";
import { SocialMediaInterface } from "../../../../services/socialMedia";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

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
              <SocialMediaLogo
                title="WhatsApp"
                target="_blank"
                href={`https://wa.me/55${socialMedia.whatsapp}?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20da%20aplica%C3%A7%C3%A3o%20Voluntech%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20oportunidades%20de%20voluntariado.`}
              >
                <FaWhatsapp />
              </SocialMediaLogo>
            )}
            {socialMedia?.instagram && (
              <SocialMediaLogo
                title="Instagram"
                target="_blank"
                href={`https://www.instagram.com/${socialMedia.instagram}`}
              >
                <FaInstagram />
              </SocialMediaLogo>
            )}
            {socialMedia?.facebook && (
              <SocialMediaLogo title="Facebook" target="_blank" href={socialMedia.facebook}>
                <FaFacebookF />
              </SocialMediaLogo>
            )}
            {socialMedia?.tiktok && (
              <SocialMediaLogo
                title="TikTok"
                target="_blank"
                href={`https://www.tiktok.com/@${socialMedia.tiktok}`}
              >
                <FaTiktok />
              </SocialMediaLogo>
            )}
          </Container>
        </>
      )}
    </>
  );
}

export { SocialMedia };
