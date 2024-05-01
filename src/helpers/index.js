import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const applySocialIcons = (social) => {
  switch (social) {
    case "facebook":
      return <FaFacebook />;
    case "twitter":
      return <FaTwitter />;
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedinIn />;
    case "github":
      return <FaGithub />;
    default:
      return <FaLink />;
  }
};
