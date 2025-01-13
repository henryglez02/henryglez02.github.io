export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  tasks,
}) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h3 className="text-lg font-semibold">{company}</h3>
      <p className="text-slate-400 font-semibold">{position}</p>
      <ul className="flex list-disc  flex-col gap-1  max-w-3xl ">
        {tasks.map((task, index) => (
          <li key={index} className="opacity-75">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};
