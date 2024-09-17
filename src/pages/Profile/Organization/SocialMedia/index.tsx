import { useEffect, useState } from "react";
import { Divider } from "../../../../components/Divider";
import { OrganizationInterface, UserInterface } from "../../../../services/users";
import { Container, SocialMediaLogo } from "./styles";
import { getSocialMediaByUser, SocialMediaInterface } from "../../../../services/socialMedia";
import Facebook from "../../../../assets/social-media/facebook.png";
import WhatsApp from "../../../../assets/social-media/whatsapp.png";
import Instagram from "../../../../assets/social-media/instagram.png";
import TikTok from "../../../../assets/social-media/tiktok.png";

interface SocialMediaProps {
  user: UserInterface | OrganizationInterface | null;
}

function SocialMedia({ user }: SocialMediaProps): JSX.Element {
  const [socialMedia, setSocialMedia] = useState<SocialMediaInterface>();

  async function getSocialMedia() {
    try {
      //   setLoading(true);
      if (user?._id) {
        let response = await getSocialMediaByUser(user._id);
        const { socialMedia } = response.data;
        setSocialMedia(socialMedia);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      //   setLoading(false);
    }
  }
  useEffect(() => {
    getSocialMedia();
  }, [user]);

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
