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
            {socialMedia?.whatsapp && <SocialMediaLogo src={WhatsApp} />}
            {socialMedia?.instagram && <SocialMediaLogo src={Instagram} />}
            {socialMedia?.facebook && <SocialMediaLogo src={Facebook} />}
            {socialMedia?.tiktok && <SocialMediaLogo src={TikTok} />}
          </Container>
        </>
      )}
    </>
  );
}

export { SocialMedia };
