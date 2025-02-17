const StatisticsCard = ({ stat, info }: { stat: string; info: string }) => {
  return (
    <div className=" bg-white p-4 text-white bg-opacity-10 rounded-md flex flex-col gap-2 pt-4">
      {" "}
      <p className=" text-3xl font-bold text-primary">{stat}</p>
      <p>{info}</p>
    </div>
  );
};

export default StatisticsCard;
