import { CircleCheckIcon } from "lucide-react";

const OurQualitiesCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" space-y-3">
      <div className=" flex gap-4">
        <CircleCheckIcon size={30} className=" text-primary" />
        <h2 className=" text-2xl font-semibold ">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default OurQualitiesCard;
