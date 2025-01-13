import Image from "next/image";

export const SkillItem: React.FC<SkillItemProps> = ({
  name,
  image,
  alt,

}) => {
  return (
    <div className="flex flex-col gap-1 items-center  ">
      <div className="flex flex-col gap-2 items-center   hover:scale-110 transition-all duration-300  ">
        <Image
          src={image}
          alt={alt}
          width={56}
          height={56}
          className="sm:w-20  sm:h-20  "
          quality={100}
        />
      </div>
      <p className="opacity-75">{name}</p>
    </div>
  );
};
