"use client";
import Link from "next/link";
import { useState } from "react";

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  techs,
  link,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      href={link}
      className="relative flex flex-col w-full p-4 border border-slate-600 gap-4 rounded-xl hover:-translate-y-1 hover:scale-100  duration-200  shadow-sm  "
    >
      <div className="flex">
        <h3 className=" font-semibold  text-lg  ">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute top-2 right-2 w-5 h-5 text-slate-400 ${
            !isHover && "hidden"
          } `}
        >
          <path
            fillRule="evenodd"
            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="opacity-80  max-w-sm ">{description}</p>
      <ul className="flex flex-wrap items-center justify-start  gap-1 text-sm sm:text-base ">
        {techs.map((tech, index) => (
          <li
            key={index}
            className="rounded-full ring-1 ring-gray-800 px-3 py-1 text-sm sm:text-sm font-medium  text-teal-400"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
};
