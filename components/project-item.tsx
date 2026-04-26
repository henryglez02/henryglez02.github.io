import Link from "next/link";
import { ProjectItemProps } from "@/types/types";

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  techs,
  link,
}) => {
  return (
    <Link
      href={link}
      className="group relative flex flex-col w-full p-6 rounded-xl bg-surface-light/40 border mouse-reveal-card gap-4"
      data-mouse-reveal
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 flex-shrink-0 mt-1"
        >
          <path
            fillRule="evenodd"
            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {techs.map((tech: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
};
