interface ProjectItemProps {
    title: string;
    description: string;
    techs: string[];
    link:string;
  }
  
interface ExperienceItemProps {
    company: string;
    position: string;
    tasks: string[];
  }

interface SkillItemProps {
    name: string;
    image: string;
    alt: string;
    width?: number;
    height?: number;

  }