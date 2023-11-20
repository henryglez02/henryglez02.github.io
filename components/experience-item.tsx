import React from "react";

interface ExperienceItemProps {
  company: string;
  date: string;
  position: string;
  tasks: React.ReactNode;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  date,
  position,
  tasks,
}) => {
  return (
    <div className="mb-8">
      <p className=" opacity-90 text-sm">{date}</p>
      <div className="flex flex-row items-center gap-2 mb-1 text-base text-slate-200  ">
        <p className="">{position}</p>
        <p>•</p>
        <p className=""> {company}</p>
      </div>
      {tasks}
    </div>
  );
};
