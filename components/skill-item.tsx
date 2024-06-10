export const SkillItem: React.FC<SkillItemProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-2 items-center   hover:scale-110 transition-all duration-300  ">
      <img src={image} alt={name} className="w-14 h-14 sm:w-20  sm:h-20  " />
    </div>
  );
};
