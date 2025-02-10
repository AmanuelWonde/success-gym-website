const TrainerCard = ({
  name,
  image,
  about,
}: {
  name: string;
  about: string;
  image: string;
}) => {
  return (
    <div className=" w-full md:flex gap-6 bg-white bg-opacity-10 p-6 rounded-md items-center md:w-[70%]">
      <div className=" -mt-20 md:min-w-[400px]">
        <img src={image} alt="Trainer image" className=" rounded-md h-80" />
      </div>
      <div className="pt-2 md:pt-0 flex flex-col gap-3">
        <p className=" text-xl font-semibold">{name}</p>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
