"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const AppBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row  mx-4 animate-fade-in-y item-center gap-4  lg:gap-1  m-7  mb-0  font-semibold text-base lg:flex-col lg:py-5 lg:px-10">
      <ul className="flex  gap-5  text-slate-200 flex-row grow  lg:flex-col lg:py-5 lg:gap-y-3 ">
        <li>
          <Link
            className={`hover:animate-pulse  hover:text-teal-300 ${
              pathname === "/" && "text-teal-300"
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={` hover:animate-pulse  hover:text-teal-300 ${
              pathname === "/experience" ? "text-teal-300" : ""
            }`}
            href="/experience"
          >
            Experience
          </Link>
        </li>

        <li>
          <Link
            className={`hover:animate-pulse   hover:text-teal-300 ${
              pathname === "/projects" ? "text-teal-300 " : ""
            }`}
            href="/projects"
          >
            Projects
          </Link>
        </li>
      </ul>
      <a
        href="https://drive.google.com/uc?export=download&id=1L0SeCzGVQUSaKVPBF-9JYsN4Dd6yVZVE"
        className={` flex flex-row pl-2  p-1 animate-bounce   bg-teal-400/10 font-medium rounded-lg text-teal-300   hover:bg-teal-400/20   
        }`}
      >
        <button>Resume</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className=" w-4 h-4 m-1"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </nav>
  );
};

export default AppBar;
