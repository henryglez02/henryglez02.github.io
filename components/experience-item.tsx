export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  position,
  tasks,
}) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="text-lg font-semibold">
        {company} • {position}{" "}
      </h2>
      <ul className="flex flex-col gap-2 text-sm sm:text-base max-w-3xl ">
        {tasks.map((task, index) => (
          <li key={index} className="opacity-75">
            • {task}
          </li>
        ))}
      </ul>
    </div>
  );
};
