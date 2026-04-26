import Image from "next/image";
import Link from "next/link";
import { ScrollHeader } from "@/components/scroll-header";
import { ExperienceItem } from "@/components/experience-item";
import { ProjectItem } from "@/components/project-item";
import { SkillItem } from "@/components/skill-item";
import { Footer } from "@/components/footer";
import { experience, projects, skills } from "@/data/data";

const cvHref =
  "https://drive.google.com/uc?export=download&id=1DBF2cSxI0JsrKA84dvVDAh3sNDJAdOct";

export default function Page() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <ScrollHeader heroId="hero-section" cvHref={cvHref} />
      <main className="max-w-4xl mx-auto px-6 py-15 md:py-16 w-full flex flex-col gap-1">
        {/* Hero Section */}
        <section
          id="hero-section"
          className="flex flex-col items-center text-center pt-8 md:pt-0 mb-20 animate-fade-in-y gap-3"
        >
          <div
            className="relative w-36 h-36 md:w-48 md:h-48 mb-8 group"
            data-mouse-reveal
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-emerald-700 animate-pulse-glow opacity-70" />
            <Image
              className="w-full h-full p-1 object-cover rounded-full border-4 border-primary shadow-[0_0_40px_rgba(13,148,136,0.35)] relative z-10"
              src="/images/avatar.jpg"
              alt="Henry Glez pictured in front of a mosaic wall on a sunny day"
              quality={80}
              width={192}
              height={192}
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white animate-fade-in-y stagger-1">
            Henry Glez
          </h1>

          <p className="text-lg mb-6 max-w-lg leading-relaxed text-slate-600 dark:text-slate-400">
            A <span className="text-primary font-semibold">Web Developer</span>{" "}
            with a passion for{" "}
            <span className="text-primary font-semibold">Accessibility</span>{" "}
            and <span className="text-primary font-semibold">AI</span>.
            <br />
            Accessible design and development, creating digital experiences for
            all.
          </p>

          <div className="flex gap-6 mb-8 animate-fade-in-y stagger-3">
            <Link
              aria-label="Github"
              className="mouse-reveal-link"
              href="https://github.com/henryglez02"
              data-mouse-reveal
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>
            <Link
              aria-label="LinkedIn"
              className="mouse-reveal-link"
              href="https://linkedin.com/in/henryglez02"
              data-mouse-reveal
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
              aria-label="Email"
              className="mouse-reveal-link"
              href="mailto:henryglez02@gmail.com"
              data-mouse-reveal
            >
              <svg
                className="w-7 h-7 scale-125"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
                />
              </svg>
            </Link>
          </div>

          <Link
            className="mouse-reveal-btn inline-flex items-center px-6 py-3 text-white font-medium rounded-full shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 animate-fade-in-y stagger-4"
            href={cvHref}
            data-mouse-reveal
          >
            Download CV
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>
        </section>

        {/* Experience Section */}
        <section className="mb-20 animate-fade-in-y stagger-4">
          <h2 className="section-heading mb-8">
            Experience
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </h2>
          <div className="space-y-10">
            {experience.map((item, index) => (
              <ExperienceItem
                key={index}
                company={item.company}
                roles={item.roles}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20 animate-fade-in-y stagger-5">
          <h2 className="section-heading mb-8">
            Projects
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Skills Section */}
        <section className="animate-fade-in-y stagger-6">
          <h2 className="section-heading mb-10">
            Skills
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </h2>
          <div className="skills-grid">
            {skills.map((item, index) => (
              <SkillItem
                key={index}
                name={item.name}
                image={item.image}
                alt={item.alt}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
