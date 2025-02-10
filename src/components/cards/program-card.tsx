import { LucideIcon } from "lucide-react";
const ProgramCard = ({
  image,
  Icon,
  title,
  description,
}: {
  image: string;
  Icon: LucideIcon;
  title: string;
  description: string;
}) => {
  return (
    <div className=" text-white  w-full bg-white bg-opacity-10 rounded shadow-lg shadow-gray-600 hover:bg-primary transition-colors duration-1000 cursor-pointer transition:2">
      <img
        src={image}
        className="w-full h-[200px] object-cover rounded"
        alt=""
      />
      <div className=" p-8 space-y-3">
        <div className=" flex gap-2">
          <Icon size={28} className="font-bold" />
          <p className=" text-xl font-bold">{title}</p>
        </div>
        <p className=" ">{description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
