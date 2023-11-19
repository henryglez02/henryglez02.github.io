import React from "react";
import Image from "next/image";

import tacoloco from "../../../assets/images/tacoloco.png";
import nxmovies from "../../../assets/images/nxmovies.png";
import notepad from "../../../assets/images/notepad.png";

import { ProjectItem } from "@/components/project-item";

const ProjectsLayout = () => {
  return (
    <main className="flex flex-col m-7 animate-fade-in-y   lg:my-12">
      <h1 className="font-bold text-slate-200 text-3xl py-4">Projects</h1>
      <hr className="bg-slate-200 opacity-10 mb-3" />
      <div className="px-3 mt-2">
        <a href="https://github.com/henryglez02/nx-movies">
          <ProjectItem
            title="NX Movies"
            description="Online movie catalog that presents the most popular films today."
            image={
              <Image
                className="object-cover w-full h-full rounded-xl"
                src={nxmovies}
                alt="Author's picture"
              />
            }
            tasks={<div className="text-slate-300 opacity-90">Typescript | Next.Js </div>}
          ></ProjectItem>
        </a>
        <a href="https://github.com/henryglez02/el-taco-loco-app">
          <ProjectItem
            title="El Taco Loco"
            description="Virtual taco store that allows you to browse and place custom orders."
            image={
              <Image
                className="object-cover w-full h-full rounded-xl"
                src={tacoloco}
                alt="Author's picture"
              />
            }
            tasks={<div className="text-slate-300 opacity-90">Flutter | Python </div>}
          ></ProjectItem>
        </a>
        <a href="https://github.com/henryglez02/NotePad">
          <ProjectItem
            title="NotePad"
            description="Notepad that provides the ability to create and access your notes easily."
            image={
              <Image
                className="object-cover w-full h-full rounded-xl"
                src={notepad}
                alt="Author's picture"
              />
            }
            tasks={
              <div className="text-slate-300 opacity-90">React | TailwindCSS </div>
            }
          ></ProjectItem>
        </a>
      </div>
    </main>
  );
};

export default ProjectsLayout;
