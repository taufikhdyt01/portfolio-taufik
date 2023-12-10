import { FaFacebookF, FaInstagram, FaTiktok, FaDiscord, FaGithub, FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import type { SocialMedia } from "@/types";

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaGithub,
    link: "https://github.com/taufikhdyt01",
  },
  {
    SocialMediaIcon: FaLinkedin,
    link: "https://linkedin.com/in/tfkhdyt/",
  },
  {
    SocialMediaIcon: FaInstagram,
    link: "https://www.instagram.com/_taufik.hidayat/",
  },
  {
    SocialMediaIcon: FaFacebookF,
    link: "https://www.facebook.com/taufikhidayat010602",
  },
  {
    SocialMediaIcon: FaTiktok,
    link: "https://www.tiktok.com/@_taufik.hidayat1",
  },
  {
    SocialMediaIcon: FaTwitter,
    link: "https://twitter.com/_taufikhdyt",
  },
  {
    SocialMediaIcon: FaDiscord,
    link: "https://discord.com/users/taufikk.",
  },
];

export const sharedSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebook,
    link: `https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
];
