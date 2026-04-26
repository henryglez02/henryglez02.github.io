import Image from "next/image";
import { SkillItemProps } from "@/types/types";

export const SkillItem: React.FC<SkillItemProps> = ({ name, image, alt }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon" data-mouse-reveal>
        <Image
          src={image}
          alt={alt}
          width={52}
          height={52}
          className="object-contain"
          quality={50}
        />
      </div>
      <span className="text-xs font-medium text-slate-400">{name}</span>
    </div>
  );
};
