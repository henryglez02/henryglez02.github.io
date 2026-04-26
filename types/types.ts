export interface ProjectItemProps {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

export interface ExperienceRole {
  position: string;
  date?: string;
  tasks: string[];
}

export interface ExperienceItemProps {
  company: string;
  roles: ExperienceRole[];
}

export interface SkillItemProps {
  name: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
}