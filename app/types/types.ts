import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: StaticImageData;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  url: string;
  icon: IconDefinition;
  iconClass: string;
}

export interface CardData {
  category: string;
  title: string;
  content: string;
  imageUrl: StaticImageData;
}
