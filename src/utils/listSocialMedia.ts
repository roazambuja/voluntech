import { SocialMediaInterface } from "../services/socialMedia";

export function listSocialMedia(socialMedia: SocialMediaInterface): string {
  const socialMediaNames: { [key: string]: string } = {
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    facebook: "Facebook",
    tiktok: "TikTok",
  };

  const listedSocialMedia = Object.entries(socialMedia)
    .filter(([key, value]) => value !== undefined && key in socialMediaNames)
    .map(([key]) => socialMediaNames[key])
    .join(", ");

  return listedSocialMedia;
}
