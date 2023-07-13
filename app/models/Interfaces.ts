import { IconName } from "@fortawesome/free-solid-svg-icons";

export interface NavbarData {
  id: number,
  title: string,
  href: string,
  icon: IconName,
  disable: boolean
}

export interface Scripts {
  name: string;
  src: string;
}

export interface ITimeline {
  title: string,
  content: string,
  date: string,
}
