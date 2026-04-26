import { ExperienceItemProps } from "@/types/types";

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  roles,
}) => {
  return (
    <article className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-700/50">
      <div className="absolute left-[-3.5px] top-[10px] w-2 h-2 rounded-full bg-primary shadow-md shadow-primary/40" />

      <div className="flex flex-col gap-3 pb-">
        <h3 className="text-xl font-bold text-slate-100">{company}</h3>

        <div className="flex flex-col gap-6">
          {roles.map((role, roleIndex) => (
            <div
              key={`${role.position}-${roleIndex}`}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="text-primary font-semibold">
                  {role.position}
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                {role.tasks.map((task, taskIndex) => (
                  <li key={`${roleIndex}-${taskIndex}`}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
