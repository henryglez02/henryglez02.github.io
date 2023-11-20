import React from "react";


interface ProjectItemProps {
  title: string;
  image: React.ReactNode;
  description: string;
  tasks: React.ReactNode;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  image,
  description,
  tasks,
}) => {
  return (
    
    <div className="flex flex-row gap-4 mb-5 rounded-xl cursor-pointer hover:ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300  ">
      <div className=" rounded-xl w-40 h-48 lg:h-44 ">{image}</div>
      <div className="w-1/2">
        <div className="flex  ">
          <h3 className=" font-semibold text-slate-200 text-base mb-1">{title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-1 w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="opacity-80 text-sm mb-1  ">{description}</p>
        {tasks}
      </div>
    </div>
    
  );
};
