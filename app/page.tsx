import Image from "next/image";
import Link from "next/link";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectItem } from "@/components/project-item";
import { SkillItem } from "@/components/skill-item";
import { experience, projects, skills } from "@/data/data";

export default function Page() {
  return (
    <div className="flex relative flex-col  min-h-screen max-w-3xl animate-fade-in-y items-center justify-center m-auto py-10">
      {/* <header className="hidden w-full px-6 py-4  z-10 sticky top-0  backdrop-blur-lg text-white  justify-between items-center">
        <p>Hello</p> <p>mode</p>
      </header> */}
      <main className="flex flex-col gap-12 px-6 items-center justify-center ">
        <section
          id="introduction"
          className="flex flex-col gap-5 pt-7 pb-5 items-center justify-center "
        >
          <Image
            className=" rounded-full sm:w-48 sm:h-48 object-cover object-center border-8  border-gray-900"
            src={"/images/avatar.jpg"}
            alt="Picture of the author"
            quality={100}
            width={160}
            height={160}
            priority
          />

          <div className="flex flex-col justify-center items-center gap-2 ">
            <h1 className="text-2xl sm:text-4xl font-bold">Henry Glez</h1>
            <p className=" text-sm sm:text-lg opacity-80 text-center">
              I'm a passionate web development and design UI/UX.
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center ">
            <Link
              className="text-slate-300 hover:text-teal-300"
              href="https://github.com/henryglez02"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.3em"
                height="2.3em"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              className="text-slate-300 hover:text-teal-300"
              href="https://github.com/henryglez02"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.3em"
                height="2.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </Link>
            <Link
              className="text-slate-300 hover:text-teal-300"
              href="mailto:henryglez02@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.3em"
                height="2.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                />
              </svg>
            </Link>
          </div>
          <Link
            className="text-sm sm:text-base font-medium py-2 px-4 rounded-2xl flex gap-2 items-center justify-center bg-teal-600 text-white hover:bg-teal-500 transition-all duration-300"
            href="https://drive.google.com/uc?export=download&id=1DBF2cSxI0JsrKA84dvVDAh3sNDJAdOct"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
              />
            </svg>
          </Link>
        </section>
        <section id="experience" className="flex flex-col gap-5 w-full ">
          <div className="flex items-center  gap-2 ">
            <h2 className="text-2xl sm:text-4xl font-bold ">Experience</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4 ">
            {experience.map((item, index) => (
              <ExperienceItem
                key={index}
                company={item.company}
                position={item.position}
                tasks={item.tasks}
              />
            ))}
          </div>
        </section>
        <section id="projects" className="flex flex-col gap-5 w-full ">
          <div className="flex items-center  gap-2 ">
            <h2 className="text-2xl sm:text-4xl font-bold ">Projects</h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-5 3c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2z"
              />
            </svg>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-4 w-full  ">
            {projects.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.title}
                description={item.description}
                techs={item.techs}
                link={item.link}
              />
            ))}
          </div>
        </section>
        <section id="skills" className="flex flex-col gap-5 w-full py-4 ">
          <div className="flex items-center  gap-2 ">
            <h2 className="text-2xl sm:text-4xl font-bold ">Skills</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
              />
            </svg>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] items-center  gap-4  ">
            {skills.map((item, index) => (
              <SkillItem key={index} name={item.name} image={item.image} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
